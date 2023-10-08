import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { FacilitiesService } from '../../../services/facilities.service';
import { Facility } from '../../facilitie/facilities.interface';

@Component({
    selector: 'app-home-facilitie',
    templateUrl: './home-facilitie.component.html',
    styleUrls: ['./home-facilitie.component.scss'],
})
export class HomeFacilitieComponent implements OnInit {
    isHovered: boolean = false;
    allItems: Facility[] = [];
    isWideScreen: boolean = false;

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.applyStyleDynamically();
    }

    constructor(private renderer: Renderer2, private facilitiesService: FacilitiesService, private el: ElementRef) {}

    ngOnInit() {
        this.facilitiesService.getFacilities().subscribe((facilities) => {
            this.allItems = [];
            for (let i = 0; i < facilities.length; i++) {
                this.allItems.push(facilities[i]);
            }
        });
        this.applyStyleDynamically();
    }

    applyStyleDynamically() {
        this.isWideScreen = window.innerWidth >= this.totalCardWidth();

        if (this.isWideScreen) {
            this.renderer.setStyle(this.el.nativeElement.querySelector('.child2'), 'justify-content', 'center');
        }
        if (!this.isWideScreen) {
            this.renderer.setStyle(this.el.nativeElement.querySelector('.child2'), 'justify-content', 'flex-start');
        }
    }

    private totalCardWidth(): number {
        const cardWidth = 150;
        const gap = 0.05 * 16;
        const cardPadding = (this.allItems.length - 2) * 2;
        const numFacilityCards = this.allItems.length;
        const totalCardWidth = numFacilityCards * (cardWidth + cardPadding + gap);
        return totalCardWidth;
    }

    toggleHover() {
        this.isHovered = !this.isHovered;
    }
}
