import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HighlightDescriptionData } from '../components/home/highlights/highlight.interface';
import * as HighlightDescData from '../../assets/json/home/highlight.json';

@Injectable({
    providedIn: 'root',
})
export class HighlightDescDataService {
    private highlightData: HighlightDescriptionData[] = HighlightDescData;

    constructor() {}

    getHighlightData(): Observable<HighlightDescriptionData[]> {
        return of(this.highlightData);
    }
}
