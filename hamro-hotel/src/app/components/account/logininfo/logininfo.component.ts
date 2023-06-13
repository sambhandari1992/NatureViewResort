import { Component } from '@angular/core';
import { ContentService } from '../../../services/content.services';
import { ProfileData } from './login-info.interface';

@Component({
    selector: 'app-logininfo',
    templateUrl: './logininfo.component.html',
    styleUrls: ['./logininfo.component.scss'],
})
export class LogininfoComponent {
    profileData: ProfileData;

    constructor(private contentService: ContentService) {
        this.profileData = this.contentService.loginInfo as ProfileData;
    }
}
