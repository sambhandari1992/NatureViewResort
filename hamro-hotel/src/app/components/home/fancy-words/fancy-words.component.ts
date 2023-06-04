import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../services/content.services';

interface Container {
  item1: string;
  item2: string;
}

@Component({
  selector: 'app-fancy-words',
  templateUrl: './fancy-words.component.html',
  styleUrls: ['./fancy-words.component.scss']
})
export class FancyWordsComponent implements OnInit {
  containers: Container[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    const repeatedContainers: Container[] = [];
    const repetitions = 3; // Number of times to repeat the items

    for (let i = 0; i < repetitions; i++) {
      repeatedContainers.push(...this.contentService.fancyWords.containers);
    }

    this.containers = repeatedContainers;
  }
}
