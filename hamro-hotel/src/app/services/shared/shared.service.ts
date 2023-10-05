// shared.service.ts

import { Injectable } from '@angular/core';
import { ContentService } from 'src/app/services/content.services';
import { NavData } from '../../components/nav/nav.interface';

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    private navData: NavData;

    constructor(private contentService: ContentService) {
        this.navData = this.contentService.navItems as NavData;
    }

    getAllRouteNames(): string[] {
        const routeNames: string[] = [];
        this.navData.sideLinks.forEach((link) => {
            routeNames.push(link.path);
        });
        this.navData.exploreLinks.forEach((link) => {
            routeNames.push(link.path);
        });
        return routeNames.filter((routeName) => routeName !== 'home');
    }
}
