
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Facility } from '../models/facilities.interface';
import * as facilitiesData from '../../assets/json/facilities.json';

@Injectable({
    providedIn: 'root',
})
export class FacilitiesService {
    private allFacilities: Facility[] = facilitiesData;

    constructor() {
      
    }

    getFacilities(): Observable<Facility[]> {
        return of(this.allFacilities);
    }
}
