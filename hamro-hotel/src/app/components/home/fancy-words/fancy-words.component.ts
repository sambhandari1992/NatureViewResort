import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../services/content.services';
import { FancyWord } from '../../../models/fancy-word.interface'

@Component({
    selector: 'app-fancy-words',
    templateUrl: './fancy-words.component.html',
    styleUrls: ['./fancy-words.component.scss'],
})
export class FancyWordsComponent implements OnInit {
    containers: FancyWord[] = [];

    constructor(private contentService: ContentService) {}

    ngOnInit(): void {
        const repeatedContainers: FancyWord[] = [];
        const repetitions = 3; // Number of times to repeat the items
        for (let i = 0; i < repetitions; i++) {
            repeatedContainers.push(...this.contentService.fancyWords.containers);
        }

        this.containers = repeatedContainers;
    }
}
