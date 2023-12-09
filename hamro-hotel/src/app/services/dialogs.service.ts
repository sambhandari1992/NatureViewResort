import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsefulInfoComponent } from '../components/footer/useful-information/useful-info.component';
import { TermsAndConditionComponent } from '../components/footer/terms-and-condition/terms-and-condition.component';
import { ViewAllReviewsComponent } from '../components/home/testimonials/view-all-reviews/view-all-reviews.component';
import { AddReviewComponent } from '../components/home/testimonials/add-review/add-review.component';

@Injectable({
    providedIn: 'root',
})
export class DialogService {
    constructor(private dialog: MatDialog) {}

    openUsefulInfo(): void {
        const dialogRef = this.dialog.open(UsefulInfoComponent, {
            // width: '400px',
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log(result);
        });
    }

    openTermsAndConditions(): void {
        const dialogRef = this.dialog.open(TermsAndConditionComponent, {
            // width: '400px',
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log(result);
        });
    }

    viewAllReviews(): void {
        const dialogRef = this.dialog.open(ViewAllReviewsComponent, {
            panelClass: 'dialog-content-sm',
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log(result);
        });
    }
    addReviews(): void {
        const dialogRef = this.dialog.open(AddReviewComponent, {
            width: '1000px',
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log(result);
        });
    }
}
