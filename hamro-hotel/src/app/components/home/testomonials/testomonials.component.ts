import { Component, Renderer2, HostListener } from '@angular/core';
import { interval, Subject, Subscription, takeUntil } from 'rxjs';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

export interface Testimonial {
    id: number;
    imgUrl: string;
    name: string;
    country: string;
    description: string;
    date: string;
}

@Component({
    selector: 'app-testomonials',
    templateUrl: './testomonials.component.html',
    styleUrls: ['./testomonials.component.scss'],
})
export class TestomonialsComponent {
    allTestomonials: Testimonial[] = [
        {
            id: 1,
            imgUrl: '/assets/images/sam.JPG',
            name: 'John Doe',
            country: 'USA',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '2023-01-15',
        },
        {
            id: 2,
            imgUrl: '/assets/images/logo.JPG',
            name: 'Jane Smith',
            country: 'Canada',
            description: 'Praesent convallis est vitae felis pulvinar, vel mollis velit consequat.',
            date: '2023-02-20',
        },
        {
            id: 3,
            imgUrl: '/assets/images/image3.JPG',
            name: 'Emily Johnson',
            country: 'Australia',
            description: 'Integer finibus orci et orci luctus tincidunt. Phasellus quis nisi sed libero efficitur fringilla.',
            date: '2023-03-25',
        },
        {
            id: 4,
            imgUrl: '/assets/images/image4.JPG',
            name: 'Michael Brown',
            country: 'UK',
            description: 'Sed fermentum, neque ut eleifend tempor, leo libero posuere mi, eget volutpat leo odio id nunc.',
            date: '2023-04-12',
        },
        {
            id: 5,
            imgUrl: '/assets/images/image5.JPG',
            name: 'Sophia Garcia',
            country: 'Spain',
            description: 'Vestibulum sodales quam at justo volutpat, id hendrerit libero condimentum.',
            date: '2023-05-19',
        },
        {
            id: 6,
            imgUrl: '/assets/images/image6.JPG',
            name: 'William Martinez',
            country: 'Mexico',
            description: 'Aliquam erat volutpat. In hac habitasse platea dictumst.',
            date: '2023-06-07',
        },
        {
            id: 7,
            imgUrl: '/assets/images/image7.JPG',
            name: 'Olivia Wilson',
            country: 'France',
            description: 'Morbi blandit, ante a efficitur ullamcorper, urna risus dictum ligula.',
            date: '2023-07-22',
        },
        {
            id: 8,
            imgUrl: '/assets/images/image8.JPG',
            name: 'Noah Anderson',
            country: 'Germany',
            description: 'Nulla tincidunt augue et tristique molestie. Sed nec lacus in nulla dictum dapibus.',
            date: '2023-08-10',
        },
        {
            id: 9,
            imgUrl: '/assets/images/image9.JPG',
            name: 'Ava Thomas',
            country: 'Italy',
            description: 'Maecenas hendrerit neque eget ullamcorper. Nulla facilisi.',
            date: '2023-09-28',
        },
        {
            id: 10,
            imgUrl: '/assets/images/image10.JPG',
            name: 'James Garcia',
            country: 'Brazil',
            description: 'Vestibulum a justo ut leo dignissim mollis.',
            date: '2023-10-15',
        },
    ];
    isMobile: boolean;
    private destroy$: Subject<void> = new Subject<void>();
    private currentTestimonialIndex = 0;
    private testimonials: Testimonial[];
    testimonial1: Testimonial[];
    testimonial2: Testimonial[];
    private readonly intervalDuration = 7000;

    constructor() {}

    ngOnInit() {
        this.shuffleAndUpdateTestimonials(); // Shuffle the testimonials initially
        this.displayNextTestimonial(); // Display the first testimonial immediately
        this.showTestimonials(); // Start the interval for cycling through testimonials
        this.checkViewportSize(); // Set initial isMobile value
    }

    showTestimonials() {
        interval(this.intervalDuration)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.displayNextTestimonial();
            });
    }

    displayNextTestimonial() {
        const index = this.currentTestimonialIndex % this.testimonials.length;

        if (index % 2 === 0) {
            this.testimonial1 = [this.testimonials[index]];
            if (!this.isMobile) {
                this.testimonial2 = [this.testimonials[(index + 1) % this.testimonials.length]];
            }
        } else {
            this.testimonial2 = [this.testimonials[index]];
            this.testimonial1 = [this.testimonials[(index - 1) % this.testimonials.length]];
        }

        this.currentTestimonialIndex++;
    }

    shuffleAndUpdateTestimonials() {
        this.testimonials = this.shuffleArray(this.allTestomonials);
    }

    shuffleArray(array: Testimonial[]): Testimonial[] {
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
    }
}

// displayedTestimonials: Testimonial[];

// constructor(private breakpointObserver: BreakpointObserver) {}

// ngOnInit() {
//     console.log(this.shuffleAndUpdateTestimonials())

//     // console.log(this.testomonial1)
//   this.breakpointObserver
//     .observe([Breakpoints.Small, Breakpoints.XSmall]) // Define your breakpoints here
//     .pipe(map((result) => result.matches))
//     .subscribe((isSmallScreen) => {
//       this.isMobile = isSmallScreen;
//       this.displayedTestimonials = isSmallScreen ? this.testomonial1 : this.allTestomonials;
//     });
// }

// shuffleAndUpdateTestimonials(): void {
//     const shuffledTestimonials = this.shuffleArray(this.allTestomonials);
//     console.log('Shuffled Testimonials:', shuffledTestimonials);

//     this.testomonial2.length = 0; // Clear the existing content of testomonial1
//     this.testomonial2.push(...shuffledTestimonials); // Push the shuffled testimonials
//     console.log(this.testomonial2);
// }
// constructor() {
//     this.checkViewportSize();
// }

// currentTestimonialIndex = 0;
// displayedTestimonial: Testimonial | undefined;

// ngOnInit(): void {
//     this.checkViewportSizeOnResize();
//     this.shuffleAndUpdateTestimonials();

//     if (!this.isMobile) {
//         this.restartInterval(); // Use restartInterval instead of startInterval
//         this.displayedTestimonial = this.testomonial1[this.currentTestimonialIndex];

//         const testimonialCard2 = document.querySelector('.example-card2');
//         if (testimonialCard2) {
//             testimonialCard2.classList.add('animate-slide-right');
//         }

//         const testimonialCard1 = document.querySelector('.example-card1');
//         if (testimonialCard1) {
//             testimonialCard1.classList.add('animate-slide-left');
//         }
//     }
// }
// startTestimonialRotation(testimonials: Testimonial[]): number {
//     let currentIndex = 1;
//     return setInterval(() => {
//         this.displayedTestimonial = testimonials[currentIndex];
//         currentIndex = (currentIndex + 1) % testimonials.length;
//     }, 7000) as any; // Cast to any if TypeScript is unable to infer the type
// }

// intervalSubscription: Subscription | undefined;

// animationStarted = false;

// private destroy$: Subject<void> = new Subject<void>();

// startInterval(): void {
//     let currentIndex = 0; // Adjust this based on your logic

//     this.intervalSubscription = interval(7000)
//         .pipe(takeUntil(this.destroy$))
//         .subscribe(() => {
//             if (!this.isMobile && this.animationStarted) {
//                 this.displayedTestimonial = this.testomonial1[currentIndex];
//                 currentIndex = (currentIndex + 1) % this.testomonial1.length;
//                 this.animationStarted = false; // Reset animation after a certain time (adjust as needed)
//             }
//         });
// }

// // resetInterval(): void {
// //     clearInterval(this.startTestimonialRotation(this.testomonial1));
// // }
// resetInterval(): void {
//     if (this.intervalSubscription) {
//         this.intervalSubscription.unsubscribe();
//     }
// }
// restartInterval(): void {
//     this.resetInterval(); // First, clear any existing interval
//     let currentIndex = 0; // Adjust this based on your logic

//     this.intervalSubscription = interval(7000)
//         .pipe(takeUntil(this.destroy$))
//         .subscribe(() => {
//             if (!this.isMobile && this.animationStarted) {
//                 this.displayedTestimonial = this.testomonial1[currentIndex];
//                 currentIndex = (currentIndex + 1) % this.testomonial1.length;
//                 this.animationStarted = false; // Reset animation after a certain time (adjust as needed)
//             }
//         });
// }

// checkViewportSize(): void {
//     this.isMobile = window.innerWidth < 1000;
// }

// checkViewportSizeOnResize(): void {
//     window.addEventListener('resize', () => {
//         this.checkViewportSize();
//     });
// }

// ngOnDestroy(): void {
//     if (this.intervalSubscription) {
//         this.intervalSubscription.unsubscribe();
//     }
//     this.destroy$.next();
//     this.destroy$.complete();
// }
// }

// getAnimationClasses(): string {
//     if (this.animationStarted && !this.isMobile) {
//         return 'animate-slide-left';
//     } else if (this.animationStarted && this.isMobile) {
//         return 'animate-fade-out';
//     }
//     return '';
// }

// import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
// import { interval, Subject, Subscription } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';
// import { Testimonial } from './testimonial.interface';
// import { TestimonialService } from '../../../services/testimonial.service';

// @Component({
//     selector: 'app-testomonials',
//     templateUrl: './testomonials.component.html',
//     styleUrls: ['./testomonials.component.scss'],
// })
// export class TestomonialsComponent implements OnInit, OnDestroy {
//     testimonials: Testimonial[] = [];
//     visibleTestimonials: Testimonial[] = [];
//     currentIndex = 0;
//     private destroy$ = new Subject<void>();
//     private intervalSubscription: Subscription;
//     animationEnabled = true;
//     isMobile = false;

//     constructor(private testimonialService: TestimonialService) {}

//     ngOnInit(): void {
//         this.checkViewportSize();
//         this.testimonialService.getTestimonials().subscribe((testimonials) => {
//             this.testimonials = testimonials;
//             this.updateVisibleTestimonials();
//             this.startInterval();
//         });
//     }

//     ngOnDestroy(): void {
//         this.destroy$.next();
//         this.destroy$.complete();
//         this.clearInterval();
//     }

//     @HostListener('window:resize')
//     checkViewportSize(): void {
//         const previousIsMobile = this.isMobile;
//         this.isMobile = window.innerWidth < 1000;

//         if (previousIsMobile !== this.isMobile) {
//             this.clearInterval();
//             this.updateVisibleTestimonials();
//             this.resetInterval();
//         }
//     }

//     updateVisibleTestimonials(): void {
//         const count = this.isMobile ? 1 : 2;
//         const currentIndex = this.currentIndex;
//         this.visibleTestimonials.splice(0);
//         const randomIndexes = this.generateRandomIndexes(currentIndex, this.testimonials.length, count);
//         randomIndexes.forEach((index) => {
//             this.visibleTestimonials.push({ ...this.testimonials[index] } as Testimonial);
//         });
//     }

//     slideLeft(): void {
//         this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
//         this.updateVisibleTestimonials();
//         this.resetInterval();
//     }

//     slideRight(): void {
//         this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
//         this.updateVisibleTestimonials();
//         this.resetInterval();
//     }

//     startInterval(): void {
//         this.intervalSubscription = interval(7000)
//             .pipe(takeUntil(this.destroy$))
//             .subscribe(() => {
//                 if (this.animationEnabled) {
//                     this.slideRight();
//                 }
//             });
//     }

//     clearInterval(): void {
//         if (this.intervalSubscription) {
//             this.intervalSubscription.unsubscribe();
//         }
//     }

//     resetInterval(): void {
//         this.clearInterval();
//         this.startInterval();
//     }

//     onMouseEnterTimeout: any;

//     onMouseEnter(): void {
//         this.clearInterval();
//         this.onMouseEnterTimeout = setTimeout(() => {
//             this.animationEnabled = false;
//         }, 2000);
//     }

//     onMouseLeave(): void {
//         clearTimeout(this.onMouseEnterTimeout);
//         this.animationEnabled = true;
//         this.startInterval();
//     }

//     onTouchStart(): void {
//         this.clearInterval();
//         this.animationEnabled = false;
//     }

//     generateRandomIndexes(currentIndex: number, length: number, count: number): number[] {
//         const availableIndexes = Array.from({ length }, (_, i) => i);
//         const remainingIndexes = availableIndexes.filter((index) => index !== currentIndex);
//         const shuffledIndexes = this.shuffleArray(remainingIndexes);
//         return shuffledIndexes.slice(0, count);
//     }

//     shuffleArray(array: any[]): any[] {
//         const newArray = array.slice();
//         for (let i = newArray.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
//         }
//         return newArray;
//     }
// }
