import { Component, Input, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ContentService } from 'src/app/services/content.services';
import { NavData } from '../../models/nav.interface';

@UntilDestroy()
@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
    @ViewChild(MatSidenav)
    sidenav!: MatSidenav;
    isAccountComponentVisiable: boolean = false;
    navData: NavData;
    // currentRouteName: any;

    allowedRoutes: string[] = [];
    @Input() currentRouteName: string;

    

    constructor(private observer: BreakpointObserver, private router: Router, private contentService: ContentService, private activatedRoute: ActivatedRoute) {
        this.navData = this.contentService.navItems as NavData;
        this.allowedRoutes = this.getAllRouteNames();

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

    openAccountComponent() {
        console.log('open now');
        if (!this.isAccountComponentVisiable) {
            this.isAccountComponentVisiable = true;
        }
    }
    closeAccountComponent(event: MouseEvent) {
        this.isAccountComponentVisiable = false;
        event.stopPropagation();
    }

    ngAfterViewInit() {
        this.observer
            .observe(['(max-width: 800px)'])
            .pipe(delay(1), untilDestroyed(this))
            .subscribe((res) => {
                if (res.matches) {
                    this.sidenav.mode = 'over';
                    this.sidenav.close();
                } else {
                    this.sidenav.mode = 'side';
                    this.sidenav.open();
                }
            });

        this.router.events
            .pipe(
                untilDestroyed(this),
                filter((e) => e instanceof NavigationEnd)
            )
            .subscribe(() => {
                this.currentRouteName = this.activatedRoute.root.firstChild?.snapshot.url[0]?.path;
                console.log(this.currentRouteName);

                if (this.sidenav.mode === 'over') {
                    this.sidenav.close();
                }
                document.querySelector('.mat-sidenav-content').scrollTop = 0;
            });
    }
    isValidRoute(routeName: string): boolean {
        
        // Assuming this.navData contains the list of valid routes
        return this.navData.sideLinks.some((link) => link.path === routeName);
    }
    
    
}

// ngOnInit() {
//     this.subscription = this.router.events.pipe(
//         filter(event => event instanceof NavigationEnd)
//     ).subscribe(() => window.scrollTo(0, 0));
// }
