import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss'],
})
export class TestimonyComponent implements OnInit, OnDestroy {
  testimonials = [
  { name: 'John Doe', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { name: 'Jane Smith', message: 'Nulla facilisi. Suspendisse sed interdum lorem, non convallis massa.' },
  { name: 'David Johnson', message: 'Vestibulum sollicitudin justo et massa commodo, vel mattis nisi pharetra.' },
  { name: 'Sarah Williams', message: 'Donec placerat mauris a interdum varius.' },
  { name: 'Michael Brown', message: 'Proin sit amet libero vel dui fermentum viverra vel sed magna.' },
  { name: 'Jessica Davis', message: 'Sed non nisi consectetur, fermentum turpis vel, dignissim orci.' },
  { name: 'Christopher Wilson', message: 'Quisque sed justo eu orci hendrerit volutpat.' },
  { name: 'Emily Johnson', message: 'Fusce rutrum mi quis feugiat lacinia.' },
  { name: 'Robert Smith', message: 'Pellentesque ut odio at velit consequat luctus a quis nisi.' },
  { name: 'Jennifer Davis', message: 'Aliquam tincidunt nisi vel est luctus, sit amet dapibus nunc egestas.' },
  { name: 'Andrew Wilson', message: 'Mauris tristique elit id mauris sollicitudin dictum.' },
  { name: 'Sophia Miller', message: 'Vivamus vel sapien vel lacus semper interdum.' },
  { name: 'Joseph Anderson', message: 'Ut non enim at velit lobortis faucibus.' },
  { name: 'Olivia Brown', message: 'Praesent euismod elit a velit ultrices, vitae tempus magna vulputate.' },
  { name: 'William Davis', message: 'Integer interdum ligula sed dapibus tincidunt.' },
  { name: 'Ava Wilson', message: 'Sed sed ex fringilla, suscipit dui ut, pulvinar ipsum.' },
  { name: 'Daniel Johnson', message: 'Phasellus in ipsum in ipsum bibendum rutrum.' },
  { name: 'Mia Taylor', message: 'Quisque eleifend orci at risus tempor, eu rutrum odio commodo.' },
  { name: 'Ethan Brown', message: 'Vestibulum pharetra dolor ac venenatis scelerisque.' },
  { name: 'Isabella Wilson', message: 'Curabitur vitae tortor tempor, consequat lorem vitae, commodo mi.' },
  { name: 'Michael Anderson', message: 'Nullam vel sapien ullamcorper, pharetra sem non, dapibus ligula.' },
  { name: 'Sophia Davis', message: 'Fusce tristique nunc in mauris pharetra cursus.' },
  { name: 'Oliver Smith', message: 'Nam ac orci non orci venenatis auctor.' },
  { name: 'Liam Johnson', message: 'Vestibulum vel nunc euismod, suscipit lacus a, dignissim metus.' },
  { name: 'Emma Williams', message: 'Cras et tortor sit amet felis commodo bibendum a non mauris.' },
  { name: 'Noah Davis', message: 'Etiam consequat enim at mi tincidunt interdum.' },
  { name: 'Ava Johnson', message: 'Suspendisse lacinia ligula vel nisl lobortis, id lobortis nisi egestas.' },
  { name: 'Sophia Wilson', message: 'In eget turpis consectetur, aliquet metus eget, placerat magna.' },
  { name: 'Liam Smith', message: 'Proin pellentesque odio vel odio tempor dictum.' },
  { name: 'Olivia Davis', message: 'Aliquam dapibus metus sit amet est elementum efficitur.' },
  { name: 'Noah Johnson', message: 'Nulla pretium lectus non ex laoreet, at tincidunt urna rhoncus.' },
  { name: 'Emma Smith', message: 'Maecenas et erat nec lorem aliquam aliquam.' }
];


  visibleTestimonials: any[] = [];
  currentIndex = 0;
  private destroy$ = new Subject<void>();
  private intervalSubscription: any;
  animationEnabled = true;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.updateVisibleTestimonials();
    this.startInterval();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.clearInterval();
  }

  updateVisibleTestimonials(): void {
    const currentIndex = this.currentIndex;
    const randomIndexes = this.generateRandomIndexes(currentIndex, this.testimonials.length, 2);
    const randomTestimonials = randomIndexes.map(index => ({ ...this.testimonials[index] }));

    this.visibleTestimonials = randomTestimonials;
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
    this.intervalSubscription = interval(5000)
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

  generateRandomIndexes(currentIndex: number, length: number, count: number): number[] {
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
