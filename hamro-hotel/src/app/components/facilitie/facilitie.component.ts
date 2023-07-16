import { Component, Input, OnInit } from '@angular/core';
import { FacilitiesService } from '../../services/facilities.service';
import { Facility } from '../../models/facilities.interface';
// import { Router } from '@angular/router';

@Component({
    selector: 'app-facilitie',
    templateUrl: './facilitie.component.html',
    styleUrls: ['./facilitie.component.scss'],
})
export class FacilitieComponent implements OnInit {
    allItems: Facility[] = [];
    @Input() customStyle: string = '';
    @Input() showButton: boolean = false;

    constructor(private facilitiesService: FacilitiesService) {}

    ngOnInit(): void {
        this.facilitiesService.getFacilities().subscribe((facilities) => {
            this.allItems = [];
            for (let i = 0; i < facilities.length; i++) {
                this.allItems.push(facilities[i]);
            }
        });
    }
}