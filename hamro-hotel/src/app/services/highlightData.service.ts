import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HighlightDescriptionData } from '../models/highlight.interface';
import * as HighlightDescData from '../../assets/json/highlight.json';

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
