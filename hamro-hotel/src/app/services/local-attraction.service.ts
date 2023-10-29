import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalAttractionData } from '../components/local-attrection/local-attraction.interface';
import * as data from '../../assets/json/local-attraction.json';

@Injectable({
    providedIn: 'root',
})
export class LocalAttractionDataService {
    private localAttractionData: LocalAttractionData[] = data;

    constructor() {}

    getLocalAttractionData(): Observable<LocalAttractionData[]> {
        return of(this.localAttractionData);
    }
}