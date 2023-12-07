import { Component, Input } from '@angular/core';
import { Testimonials } from '../../home/testimonials/testimonial.interface';

@Component({
    selector: 'app-shared-feature',
    templateUrl: './shared-feature.component.html',
    styleUrls: ['./shared-feature.component.scss'],
})
export class SharedFeatureComponent {
    @Input() title: string;
    @Input() testimonials: Testimonials[];

    // Other component logic goes here
}
