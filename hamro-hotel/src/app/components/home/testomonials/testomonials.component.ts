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
    private currentTestimonialIndex = 1;
    private testimonials: Testimonial[];
    testimonial1: Testimonial[];
    testimonial2: Testimonial[];
    private readonly intervalDuration = 7000;

    constructor() {}

    ngOnInit() {
        this.shuffleAndUpdateTestimonials();
        this.displayTestimonials();
        this.showTestimonials();
        this.checkViewportSize();
    }

    showTestimonials() {
        interval(this.intervalDuration)
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
