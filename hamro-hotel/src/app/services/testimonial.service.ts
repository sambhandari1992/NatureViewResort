import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
import { Testimonials } from '../components/home/testimonials/testimonial.interface';

@Injectable({
    providedIn: 'root',
})
export class TestimonialService {
    private testimonialsUrl = '../../assets/json/home/testimonials.json'; 

    constructor(private http: HttpClient) {} 

    getTestimonials(): Observable<Testimonials[]> {
        return this.http.get<Testimonials[]>(this.testimonialsUrl)
          .pipe(
            catchError((error: any) => {
              console.error('Error fetching reviews:', error);
              throw new Error('Unable to fetch reviews. Please try again later.');
            })
          );
      }
}



