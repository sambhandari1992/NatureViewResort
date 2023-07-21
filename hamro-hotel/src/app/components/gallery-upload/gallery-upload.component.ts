import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery-upload',
  templateUrl: './gallery-upload.component.html',
  styleUrls: ['./gallery-upload.component.scss'],
})
export class GalleryUploadComponent {
  textMessage: string = '';

  constructor(private http: HttpClient) {}

  postText() {
    if (this.textMessage) {
      const postData = {
        text: this.textMessage, // The 'text' property contains the text message
      };

      // Replace 'http://localhost:3000/api/upload-text' with the actual URL of your backend endpoint
      this.http.post('http://localhost:3000/api/upload-text', postData)
        .subscribe(
          (response) => {
            console.log('Text posted successfully!', response);
          },
          (error) => {
            console.error('Failed to post text:', error);
          }
        );
    }
  }
}
