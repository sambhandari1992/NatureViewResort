import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FacilitiesService } from '../../services/facilities.service';
import { Facility } from '../../models/facilities.interface';

@Component({
  selector: 'app-facilitie',
  templateUrl: './facilitie.component.html',
  styleUrls: ['./facilitie.component.scss'],
})
export class FacilitieComponent implements OnInit, AfterViewInit {
  allFacilities: Facility[] = [];
  allItems: Facility[] = [];

  @ViewChild('boxesContainer') boxesContainer!: ElementRef;
  @ViewChild('boxElement') boxElements!: ElementRef[];

  constructor(private facilitiesService: FacilitiesService) {}

  ngOnInit(): void {
    this.facilitiesService.getFacilities().subscribe((facilities) => {
      for (let i = 0; i < facilities.length; i++) {
        this.allItems.push(facilities[i]);
      }
    });
  }

  ngAfterViewInit(): void {
    this.checkBoxVisibility();
  }

  checkBoxVisibility(): void {
    const containerWidth = this.boxesContainer.nativeElement.clientWidth;
    this.boxElements.forEach((boxElement: ElementRef) => {
      const boxWidth = boxElement.nativeElement.clientWidth;
      if (boxWidth > containerWidth) {
        boxElement.nativeElement.style.display = 'none';
      } else if (boxWidth < 200) {
        boxElement.nativeElement.style.display = 'none';
      } else {
        boxElement.nativeElement.style.display = 'flex';
      }
    });
  }
  
}
