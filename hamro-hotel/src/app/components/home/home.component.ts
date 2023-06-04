import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images: string[] = [];

  currentImageIndex = 0;

  ngOnInit() {
    this.generateImageURLs();
    setInterval(() => {
      this.changeImage();
    }, 10000); // Change image every 5 seconds
  }

  generateImageURLs() {
    const baseURL = '../../../assets/images/home/img';
    const totalImages = 10;

    for (let i = 0; i <= totalImages; i++) {
      const imageURL = `${baseURL}${i}.jpeg`;
      this.images.push(imageURL);
    }
  }

  changeImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
}
