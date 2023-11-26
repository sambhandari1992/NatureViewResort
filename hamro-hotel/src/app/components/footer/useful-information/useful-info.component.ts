import { Component } from '@angular/core';


import { ContentService } from 'src/app/services/content.services';
import { UsefulInfoInterface } from './useful-info.interface';

@Component({
  selector: 'app-useful-link',
  templateUrl: './useful-info.component.html',
  styleUrls: ['./useful-info.component.scss']
})
export class UsefulInfoComponent {


  usefulInfo: UsefulInfoInterface;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
      this.loadUsefulInfo();
  }

  loadUsefulInfo() {
    this.usefulInfo = this.contentService.usefulInformation as UsefulInfoInterface;
  }

}
