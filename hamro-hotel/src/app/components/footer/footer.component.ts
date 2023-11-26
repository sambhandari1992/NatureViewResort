import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentService } from 'src/app/services/content.services';
import { CustomIcon } from 'src/app/services/custom-icon.service';
import { ContactInfoItem } from '../contact/contact.interface';
import { NavData } from '../nav/nav.interface';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { UsefulInfoComponent } from './useful-information/useful-info.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    navData: NavData;
    contactInfoData: ContactInfoItem[];

    constructor(private contentService: ContentService, private iconService: CustomIcon, public dialog: MatDialog) {
        this.navData = this.contentService.navItems as NavData;
        this.contactInfoData = this.contentService.contactInfo;
    }

    openTermsAndConditionDialog(): void {
        const dialogRef = this.dialog.open(TermsAndConditionComponent, {
            // width: '2000px',
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }

    openUsefulInfoDialog(): void {
        const dialogRef = this.dialog.open(UsefulInfoComponent, {
            // width: '600px',
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }

    getCombinedLinks(): any[] {
        return [...this.navData.sideLinks, ...this.navData.exploreLinks];
    }
}
