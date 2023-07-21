import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dining',
  templateUrl: './dining.component.html',
  styleUrls: ['./dining.component.scss'],
})
export class DiningComponent {
  selectedImage: File | null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.selectedImage = inputElement?.files?.[0] || null;
    console.log('Selected Image:', this.selectedImage);
  }

  uploadImage() {
    if (this.selectedImage) {
      const formData = new FormData();
      formData.append('image', this.selectedImage);

      // Replace 'your-backend-upload-url' with the actual URL to handle image upload on the server
      this.http.post('https://jsonplaceholder.typicode.com/posts', formData)
      .subscribe({
          next: (response) => {
            console.log('Image uploaded successfully!', response);
            // Add any success message or refresh the gallery to display the new image
          },
          error: (error) => {
            console.error('Failed to upload image:', error);
            // Handle error messages if needed
          },
          complete: () => {
            console.log('Request completed successfully');
          }
        });
    }
  }


}
