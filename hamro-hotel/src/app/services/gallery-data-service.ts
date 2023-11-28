import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GalleryItem } from '../components/gallery/gallery.interface'; 

@Injectable({
  providedIn: 'root',
})
export class GalleryDataService {
  constructor(private http: HttpClient) {}

  getImageUrls(): Observable<GalleryItem[]> {
    return this.http.get<GalleryItem[]>('/assets/json/gallery-data.json');
  }
}
