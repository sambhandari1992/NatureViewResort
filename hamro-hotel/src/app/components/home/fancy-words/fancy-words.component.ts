import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../services/content.services'


interface Container {
  item1: string;
  item2: string;
}

@Component({
  selector: 'app-fancy-words',
  templateUrl: './fancy-words.component.html',
  styleUrls: ['./fancy-words.component.scss']
})
export class FancyWordsComponent  implements OnInit {
  containers: Container[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.containers = this.contentService.fancyWords.containers;
  }
}