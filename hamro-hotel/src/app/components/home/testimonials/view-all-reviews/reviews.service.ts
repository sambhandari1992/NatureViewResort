import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Reviews } from './reviews.interface';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private reviewsUrl = '/assets/json/testimonials.json'; // Path to your JSON file

  constructor(private http: HttpClient) { }

  getReviews(): Observable<Reviews[]> {
    return this.http.get<Reviews[]>(this.reviewsUrl)
      .pipe(
        catchError((error: any) => {
          console.error('Error fetching reviews:', error);
          throw new Error('Unable to fetch reviews. Please try again later.');
        })
      );
  }
}
