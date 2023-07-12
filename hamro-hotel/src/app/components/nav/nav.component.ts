import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
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

    constructor(private observer: BreakpointObserver, private router: Router, private contentService: ContentService) {
        this.navData = this.contentService.navItems as NavData;
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
        console.log('cdsjkc');
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
                if (this.sidenav.mode === 'over') {
                    this.sidenav.close();
                }
                document.querySelector('.mat-sidenav-content').scrollTop = 0;


            });
    }
  
}


// ngOnInit() {
//     this.subscription = this.router.events.pipe(
//         filter(event => event instanceof NavigationEnd)
//     ).subscribe(() => window.scrollTo(0, 0));
// }