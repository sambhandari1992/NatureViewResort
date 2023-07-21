import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImageData } from '../components/gallery/gallery.interface';

@Injectable({
  providedIn: 'root',
})
export class GalleryDataService {
  constructor(private http: HttpClient) {}

  getImageUrls(): Observable<ImageData[]> {
    return this.http.get<{ imageUrls: ImageData[] }>('/assets/json/gallery-data.json').pipe(
      map((data) => data.imageUrls)
    );
  }
}
