import { Component, Input } from '@angular/core';
import { Testimonial } from '../../home/testomonials/testimonial.interface';

@Component({
    selector: 'app-shared-feature',
    templateUrl: './shared-feature.component.html',
    styleUrls: ['./shared-feature.component.scss'],
})
export class SharedFeatureComponent {
    @Input() title: string;
    @Input() testimonials: Testimonial[];

    // Other component logic goes here
}
