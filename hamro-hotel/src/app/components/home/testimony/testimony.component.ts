import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { interval, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Testimonial } from '../../../modules/testimonial.model';
import { TestimonialService } from '../../../services/testimonial.service';

@Component({
    selector: 'app-testimony',
    templateUrl: './testimony.component.html',
    styleUrls: ['./testimony.component.scss'],
})
export class TestimonyComponent implements OnInit, OnDestroy {
    testimonials: Testimonial[] = [];
    visibleTestimonials: Testimonial[] = [];
    currentIndex = 0;
    private destroy$ = new Subject<void>();
    private intervalSubscription: Subscription;
    animationEnabled = true;
    isMobile = false;

    constructor(private testimonialService: TestimonialService) {}

    ngOnInit(): void {
        this.checkViewportSize();
        this.testimonialService.getTestimonials().subscribe((testimonials) => {
            this.testimonials = testimonials;
            this.updateVisibleTestimonials();
            this.startInterval();
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
        this.clearInterval();
    }

    @HostListener('window:resize')
    checkViewportSize(): void {
        const previousIsMobile = this.isMobile;
        this.isMobile = window.innerWidth < 1000;

        if (previousIsMobile !== this.isMobile) {
            this.clearInterval();
            this.updateVisibleTestimonials();
            this.resetInterval();
        }
    }

    updateVisibleTestimonials(): void {
        const count = this.isMobile ? 1 : 2;
        const currentIndex = this.currentIndex;
        this.visibleTestimonials.splice(0);
        const randomIndexes = this.generateRandomIndexes(currentIndex, this.testimonials.length, count);
        randomIndexes.forEach((index) => {
            this.visibleTestimonials.push({ ...this.testimonials[index] } as Testimonial);
        });
    }

    slideLeft(): void {
        this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
        this.updateVisibleTestimonials();
        this.resetInterval();
    }

    slideRight(): void {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
        this.updateVisibleTestimonials();
        this.resetInterval();
    }

    startInterval(): void {
        this.intervalSubscription = interval(7000)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                if (this.animationEnabled) {
                    this.slideRight();
                }
            });
    }

    clearInterval(): void {
        if (this.intervalSubscription) {
            this.intervalSubscription.unsubscribe();
        }
    }

    resetInterval(): void {
        this.clearInterval();
        this.startInterval();
    }

    onMouseEnterTimeout: any;

    onMouseEnter(): void {
        this.clearInterval();
        this.onMouseEnterTimeout = setTimeout(() => {
            this.animationEnabled = false;
        }, 2000);
    }

    onMouseLeave(): void {
        clearTimeout(this.onMouseEnterTimeout);
        this.animationEnabled = true;
        this.startInterval();
    }

    onTouchStart(): void {
        this.clearInterval();
        this.animationEnabled = false;
    }

    generateRandomIndexes(currentIndex: number, length: number, count: number): number[] {
        const availableIndexes = Array.from({ length }, (_, i) => i);
        const remainingIndexes = availableIndexes.filter((index) => index !== currentIndex);
        const shuffledIndexes = this.shuffleArray(remainingIndexes);
        return shuffledIndexes.slice(0, count);
    }

    shuffleArray(array: any[]): any[] {
        const newArray = array.slice();
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
}
