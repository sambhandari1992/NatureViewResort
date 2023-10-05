import { Component, HostListener } from '@angular/core';
import { ContentService } from '../../../services/content.services';
import { HomeAboutDetails } from './home-about.interface';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss'],
})
export class HomeAboutComponent {
  homeAboutDetails: HomeAboutDetails;
  isLargeViewport: boolean = false;
  isExtraLargeViewport: boolean = false;

  constructor(private contentService: ContentService) {
    this.homeAboutDetails = this.contentService.homeAboutInfo as HomeAboutDetails;
    this.checkViewportSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkViewportSize();
  }

  private checkViewportSize() {
    const viewportWidth = window.innerWidth;
    this.isLargeViewport = viewportWidth > 700;
    this.isExtraLargeViewport = viewportWidth > 1400;
  }
}
