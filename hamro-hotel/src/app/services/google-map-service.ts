import { Injectable } from '@angular/core';
import { environment } from '../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  private apiKey: string = environment.apiKey;

  getApiKey(): string {
    return this.apiKey;
  }
}
