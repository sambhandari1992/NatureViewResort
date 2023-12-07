import { Component, HostListener } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { interval, Subject, Subscription, takeUntil } from 'rxjs';
import { DialogService } from 'src/app/services/dialogs.service';
import { TestimonialService } from 'src/app/services/testimonial.service';
import { Testimonials } from './testimonial.interface';
import { ViewAllReviewsComponent } from './view-all-reviews/view-all-reviews.component';

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

    constructor(public dialog: MatDialog, private testimonialService: TestimonialService, private dialogService: DialogService) {}

    ngOnInit() {
        this.fetchTestimonials();
        this.checkViewportSize();
    }

    // openDialog() {
    //     const dialogRef = this.dialog.open(ViewAllReviewsComponent);
    
    //     dialogRef.afterClosed().subscribe(result => {
    //       console.log(`Dialog result: ${result}`);
    //     });
    //   }

    openViewAllReviewsDialog(): void {
        this.dialogService.viewAllReviews();
    }

    // fetchTestimonials() {
    //     this.testimonialService.getTestimonials().subscribe({
    //         next: (data) => {
    //             if (data.length === 0) {
    //                 console.log('No testimonials available.');
    //             } else {
    //                 this.myTestimonials.push(...data);
    //                 this.shuffleAndUpdateTestimonials();
    //                 this.displayTestimonials();
    //                 this.showTestimonials();
    //             }
    //         },
    //         error: (error) => {
    //             console.error('Error fetching testimonials:', error);
    //         },
    //     });
    // }

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
                // Handle error scenario here
                // For instance, setting a default value or showing an error message
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
