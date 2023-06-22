import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconData } from '../../assets/icon-data';

@Injectable({ providedIn: 'root' })
export class CustomIcon {
    constructor(private matIconRegistry: MatIconRegistry, private domSenitizer: DomSanitizer) {
        IconData.forEach((res) => {
            this.matIconRegistry.addSvgIconLiteral(res.name, this.domSenitizer.bypassSecurityTrustHtml(res.data));
        });
    }
}
