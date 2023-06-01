// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss'],
// })
// export class HomeComponent {}




import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: string[] = [
    '../../../assets/images/home/5.jpeg',
    '../../../assets/images/home/6.jpeg',
    '../../../assets/images/home/7.jpeg',
    // Add more image URLs as needed
  ];
  currentImageIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.changeImage();
    }, 5000); // Change image every 5 seconds
  }

  changeImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    console.log(this.currentImageIndex);
  }
}
