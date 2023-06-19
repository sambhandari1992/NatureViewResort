import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { interval, Subject } from 'rxjs';
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
  private intervalSubscription: any;
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
    this.isMobile = window.innerWidth < 1000;
  }

  updateVisibleTestimonials(): void {
    const count = this.isMobile ? 1 : 2;
    const currentIndex = this.currentIndex;
    const randomIndexes = this.generateRandomIndexes(
      currentIndex,
      this.testimonials.length,
      count
    );
    const randomTestimonials = randomIndexes.map(
      (index) => ({ ...this.testimonials[index] } as Testimonial)
    );

    this.visibleTestimonials = randomTestimonials;
  }

  slideLeft(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
    this.updateVisibleTestimonials();
    this.resetInterval();
  }

  slideRight(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.updateVisibleTestimonials();
    this.resetInterval();
  }

  startInterval(): void {
    this.intervalSubscription = interval(10000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.slideRight();
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

  onMouseEnter(): void {
    console.log('Mouse entered');
    this.animationEnabled = false;
    this.clearInterval();
  }

  onMouseLeave(): void {
    console.log('Mouse left');
    this.animationEnabled = true;
    this.startInterval();
  }

  generateRandomIndexes(
    currentIndex: number,
    length: number,
    count: number
  ): number[] {
    const indexes: number[] = [];

    while (indexes.length < count) {
      const randomIndex = Math.floor(Math.random() * length);
      if (randomIndex !== currentIndex && !indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    return indexes;
  }
}
