import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FacilitiesService } from '../../services/facilities.service';
import { Facility } from '../../models/facilities.interface';
import { Router } from '@angular/router';


@Component({
    selector: 'app-facilitie',
    templateUrl: './facilitie.component.html',
    styleUrls: ['./facilitie.component.scss'],
})
export class FacilitieComponent implements OnInit {
    allItems: Facility[] = [];
    @Input() customStyle: string = '';
    @Input() showButton: boolean = false;

    isLargeScreen: boolean = window.innerWidth > 1899;



    constructor(private facilitiesService: FacilitiesService, private router: Router) {}

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.isLargeScreen = window.innerWidth > 1899;
    }

    ngOnInit(): void {
        this.facilitiesService.getFacilities().subscribe((facilities) => {
            this.allItems = [];
            for (let i = 0; i < facilities.length; i++) {
                this.allItems.push(facilities[i]);
            }
        });
    }
    navigateToFacilities() {
        this.router.navigate(['/facilities'], { replaceUrl: true });
      }
}