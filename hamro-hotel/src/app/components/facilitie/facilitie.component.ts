import { Component, Input, OnInit } from '@angular/core';
import { FacilitiesService } from '../../services/facilities.service';
import { Facility } from '../../models/facilities.interface';

@Component({
    selector: 'app-facilitie',
    templateUrl: './facilitie.component.html',
    styleUrls: ['./facilitie.component.scss'],
})
export class FacilitieComponent implements OnInit {
    allItems: Facility[] = [];
    @Input() applyCustomStyle: boolean = false;

    constructor(private facilitiesService: FacilitiesService) {}

    ngOnInit(): void {
        console.log('try');
        this.facilitiesService.getFacilities().subscribe((facilities) => {
            for (let i = 0; i < facilities.length; i++) {
                this.allItems.push(facilities[i]);
            }
        });
    }
}
