import { Component, HostListener } from '@angular/core';
import { interval, Subject, Subscription, takeUntil } from 'rxjs';
import { TestimonialService } from 'src/app/services/testimonial.service';
import { Testimonials } from './testimonial.interface';

@Component({
    selector: 'app-testimonials',
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
    isMobile: boolean;
    private destroy$: Subject<void> = new Subject<void>();
    private currentTestimonialIndex = 0;
    private testimonials: Testimonials[];
    testimonial1: Testimonials[];
    testimonial2: Testimonials[];
    private readonly intervalDuration = 7000;

    myTestimonials: Testimonials[] = [];
    intervalSubscription: Subscription | undefined;

    constructor(private testimonialService: TestimonialService) {}

    ngOnInit() {
        this.fetchTestimonials();
        this.checkViewportSize();
    }
    fetchTestimonials() {
        this.testimonialService.getTestimonials().subscribe({
            next: (data) => {
                if (data.length === 0) {
                    console.log('No testimonials available.');
                } else {
                    this.myTestimonials.push(...data);
                    this.shuffleAndUpdateTestimonials();
                    this.displayTestimonials();
                    this.showTestimonials();
                }
            },
            error: (error) => {
                console.error('Error fetching testimonials:', error);
            },
        });
    }

    showTestimonials() {
        this.intervalSubscription = interval(this.intervalDuration)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.displayTestimonials();
            });
    }

    displayTestimonials() {
        const index = this.currentTestimonialIndex % this.testimonials.length;
        this.testimonial1 = [this.testimonials[index]];

        let randomIndex = Math.floor(Math.random() * this.testimonials.length);

        // Ensure randomIndex is different from the first index
        if (randomIndex === index) {
            randomIndex = randomIndex < this.testimonials.length ? randomIndex + 1 : randomIndex - 1;
        }

        this.testimonial2 = [this.testimonials[randomIndex]]; // Display the next item

        this.currentTestimonialIndex++;
    }

    shuffleAndUpdateTestimonials() {
        this.testimonials = this.shuffleArray(this.myTestimonials);
    }

    shuffleArray(array: Testimonials[]): Testimonials[] {
        for (let i = array.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
        }
        return array;
    }

    @HostListener('window:resize')
    checkViewportSize(): void {
        this.isMobile = window.innerWidth < 1000;
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();

        if (this.intervalSubscription) {
            this.intervalSubscription.unsubscribe();
        }
    }
}
