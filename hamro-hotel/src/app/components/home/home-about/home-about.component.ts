import { Component } from '@angular/core';
import { ContentService } from '../../../services/content.services';
import { HomeAboutDetails } from './home-about.interface';
@Component({
    selector: 'app-home-about',
    templateUrl: './home-about.component.html',
    styleUrls: ['./home-about.component.scss'],
  })
export class HomeAboutComponent {
    homeAboutDetails: HomeAboutDetails;

    constructor(private contentService: ContentService) {
        this.homeAboutDetails = this.contentService.homeAboutInfo as HomeAboutDetails;

    }
  
}
