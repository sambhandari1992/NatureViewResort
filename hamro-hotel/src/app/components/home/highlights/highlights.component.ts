import { Component } from '@angular/core';
import { HighlightDescriptionData } from 'src/app/models/highlight.interface';
import { HighlightDescDataService } from 'src/app/services/highlightData.service';
@Component({
    selector: 'app-highlights',
    templateUrl: './highlights.component.html',
    styleUrls: ['./highlights.component.scss'],
})
export class HighlightsComponent {
    allComponents: HighlightDescriptionData[] = [];
    constructor(private highlightDescDataService: HighlightDescDataService) {}

    ngOnInit(): void {
        this.highlightDescDataService.getHighlightData().subscribe((c) => {
            this.allComponents = [];
            for (let i = 0; i < c.length; i++) {
                this.allComponents.push(c[i]);
                
            }
        });
    }
}
