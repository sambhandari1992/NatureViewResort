import { Component } from '@angular/core';
import { ContentService } from 'src/app/services/content.services';
import { CustomIcon } from 'src/app/services/custom-icon.service';
import { ContactInfoItem } from '../contact/contact.interface';
import { NavData } from '../../models/nav.interface';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    navData: NavData;
    contactInfoData: ContactInfoItem[];

    constructor(private contentService: ContentService, private iconService: CustomIcon) {
        this.navData = this.contentService.navItems as NavData;
        this.contactInfoData = this.contentService.contactInfo;
    }

    getCombinedLinks(): any[] {
        return [...this.navData.sideLinks, ...this.navData.exploreLinks];
    }
}
