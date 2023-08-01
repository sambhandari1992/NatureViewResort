import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared/shared.service'; // Import the shared service

type AllComponents = {
    name: string;
    description: string;
    imageUrl: string;
};

@Component({
    selector: 'app-highlights',
    templateUrl: './highlights.component.html',
    styleUrls: ['./highlights.component.scss'],
})
export class HighlightsComponent {
    images: string[] = [];
    currentImageIndex = 0;
    showButton: boolean = true;

    allComponents: AllComponents[] = [];
    routeNames: string[];

    constructor(private router: Router, private sharedService: SharedService) {
        this.routeNames = this.sharedService.getAllRouteNames();
    }

    ngOnInit() {
        for (let i = 1; i <= this.routeNames.length - 1; i++) {
            this.allComponents.push({
                name: this.routeNames[i],
                description: `Description of Local Attraction ${i}.`,
                imageUrl: `https://source.unsplash.com/random/500x500?sig=${i}`,
            });
        }
    }
}
