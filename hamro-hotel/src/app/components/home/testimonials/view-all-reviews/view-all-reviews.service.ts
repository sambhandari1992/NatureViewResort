import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Testimonials } from '../testimonial.interface'; 


@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private reviewsUrl = '/assets/json/testimonials.json';

  constructor(private http: HttpClient) { }

  getReviews(): Observable<Testimonials[]> {
    return this.http.get<Testimonials[]>(this.reviewsUrl)
      .pipe(
        catchError((error: any) => {
          console.error('Error fetching reviews:', error);
          throw new Error('Unable to fetch reviews. Please try again later.');
        })
      );
  }
}
