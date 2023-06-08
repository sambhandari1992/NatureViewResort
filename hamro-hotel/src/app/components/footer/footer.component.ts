import { Component } from '@angular/core';
import { ContentService } from 'src/app/services/content.services';
import { NavData } from '../nav/nav.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  navData: NavData;

  constructor(private contentService: ContentService) {
    this.navData = this.contentService.navItems as NavData;
  }

  getCombinedLinks(): any[] {
    return [...this.navData.sideLinks, ...this.navData.exploreLinks];
  }
}
