import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    // constructor(
    //   private matIconRegistry: MatIconRegistry,
    //   private domSenitizer: DomSanitizer
    //   ) {
    //     this.matIconRegistry.addSvgIcon('facebook', this.domSenitizer.bypassSecurityTrustResourceUrl('../assets/svg/facebook.svg'))
    // }
    // constructor(private iconService: IconServices) {}
}
