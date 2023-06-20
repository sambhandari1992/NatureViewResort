import { Component } from '@angular/core';
import { ContentService } from '../../services/content.services';
import { ContactInfoItem } from '../../components/contact/contact.interface';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
    contactInfoData: ContactInfoItem[];

    constructor(private contentService: ContentService) {
        this.contactInfoData = this.contentService.contactInfo;
    }
}
