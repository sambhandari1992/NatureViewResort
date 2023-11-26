import { Component } from '@angular/core';

import { ContentService } from 'src/app/services/content.services';
import { TermsAndConditionInterface } from './terms-and-condition.interface';

@Component({
  selector: 'app-terms-and-condition',
  templateUrl: './terms-and-condition.component.html',
  styleUrls: ['./terms-and-condition.component.scss']
})
export class TermsAndConditionComponent {
  panelOpenState = false;

  termsAndConditions: TermsAndConditionInterface;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
      this.loadTermsAndConditions();
  }

  loadTermsAndConditions() {
    this.termsAndConditions = this.contentService.termsAndConditions as TermsAndConditionInterface;
  }

}
