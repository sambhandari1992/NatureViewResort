import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Testimonial } from '../components/home/testomonials/testimonial.interface';
import * as testimonialsData from '../../assets/json/testimonials.json';

@Injectable({
    providedIn: 'root',
})
export class TestimonialService {
    private testimonials: Testimonial[] = testimonialsData;

    constructor() {}

    getTestimonials(): Observable<Testimonial[]> {
        return of(this.testimonials);
    }
}
