// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   private apiBaseUrl = 'localhost:3000/api'; // Replace with your backend server URL

//   constructor(private http: HttpClient) { }

//   getGoogleMapsApiKey(): Promise<string> {
//     const url = `${this.apiBaseUrl}/google-maps-api-key`; // Replace with the actual endpoint URL on your backend server
//     return this.http.get<{ apiKey: string }>(url)
//       .toPromise()
//       .then(response => response.apiKey)
//       .catch(error => {
//         console.error('Failed to retrieve Google Maps API key', error);
//         throw error;
//       });
//   }
// }
