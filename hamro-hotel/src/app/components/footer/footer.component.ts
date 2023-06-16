import { Component } from '@angular/core';
import { ContentService } from 'src/app/services/content.services';
import { ContactInfoItem } from '../contact/contact.interface';
import { NavData } from '../nav/nav.interface';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    navData: NavData;
    contactInfoData: ContactInfoItem[];

    constructor(private contentService: ContentService) {
        this.navData = this.contentService.navItems as NavData;
        this.contactInfoData = this.contentService.contactInfo;
    }

    getCombinedLinks(): any[] {
        return [...this.navData.sideLinks, ...this.navData.exploreLinks];
    }
}
