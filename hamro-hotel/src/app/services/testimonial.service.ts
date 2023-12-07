// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { Testimonials } from '../components/home/testomonials/testimonial.interface';
// import * as testimonialsData from '../../assets/json/testimonials.json';

// @Injectable({
//     providedIn: 'root',
// })
// export class TestimonialService {
//     private testimonials: Testimonials[] = testimonialsData;

//     constructor() {}

//     getTestimonials(): Observable<Testimonials[]> {
//         return of(this.testimonials);
//     }
// }

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Testimonials } from '../components/home/testimonials/testimonial.interface';

@Injectable({
    providedIn: 'root',
})
export class TestimonialService {
    private testimonialsUrl = '../../assets/json/testimonials.json'; // Adjust the path accordingly

    constructor(private http: HttpClient) {} // Inject HttpClient

    getTestimonials(): Observable<Testimonials[]> {
        return this.http.get<Testimonials[]>(this.testimonialsUrl);
    }
}
