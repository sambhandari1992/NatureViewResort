import { Component } from '@angular/core';
import { LocalAttractionData } from './local-attraction.interface';
import { LocalAttractionDataService } from 'src/app/services/local-attraction.service';

@Component({
    selector: 'app-local-attrection',
    templateUrl: './local-attrection.component.html',
    styleUrls: ['./local-attrection.component.scss'],
})
export class LocalAttrectionComponent {
    localAttractionData: LocalAttractionData[] = [];

    constructor( private localAttractionDataService: LocalAttractionDataService) {}

    ngOnInit(): void {
        this.localAttractionDataService.getLocalAttractionData().subscribe((c) => {
            this.localAttractionData = [];
            for (let i = 0; i < c.length; i++) {
                this.localAttractionData.push(c[i]);
            }
        });
    }
}
