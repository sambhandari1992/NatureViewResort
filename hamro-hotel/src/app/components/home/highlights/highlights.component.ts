import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HighlightDescriptionData } from 'src/app/components/home/highlights/highlight.interface';
import { HighlightDescDataService } from 'src/app/services/highlightData.service';
@Component({
    selector: 'app-highlights',
    templateUrl: './highlights.component.html',
    styleUrls: ['./highlights.component.scss'],
})
export class HighlightsComponent {
    allComponents: HighlightDescriptionData[] = [];
    constructor(private router: Router, private highlightDescDataService: HighlightDescDataService) {}

    ngOnInit(): void {
        this.highlightDescDataService.getHighlightData().subscribe((c) => {
            this.allComponents = []; 
            for (let i = 0; i < c.length; i++) {
                this.allComponents.push(c[i]);
            }
        });
    }
    redirectToComponentRoute(component: HighlightDescriptionData): void {
        this.router.navigate([component.name]); // Navigate to the route with the component's name
    }
}
