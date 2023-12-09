import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ReviewsService } from './view-all-reviews.service';
import { Testimonials } from '../testimonial.interface'; 

@Component({
    selector: 'app-view-all-reviews',
    templateUrl: './view-all-reviews.component.html',
    styleUrls: ['./view-all-reviews.component.scss'],
})
export class ViewAllReviewsComponent implements OnInit, OnDestroy {
    reviews$: Observable<Testimonials[]>; 
    private destroy$ = new Subject<void>();

    constructor(private reviewsService: ReviewsService) {}

    ngOnInit(): void {
        this.reviews$ = this.reviewsService.getReviews().pipe(takeUntil(this.destroy$));

        // this.reviews$.subscribe({
        //     next: (reviews) => console.log(reviews),
        //     error: (err) => console.error(err),
        //     complete: () => console.log('Reviews subscription complete'),
        // });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
