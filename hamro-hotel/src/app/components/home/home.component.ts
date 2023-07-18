import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    images: string[] = [];
    currentImageIndex = 0;
    showButton: boolean = true;


    constructor(private ngZone: NgZone, private router: Router ) {}

    ngOnInit() {
        this.generateImageURLs();
        this.startImageTimer();
    }

    generateImageURLs() {
        const baseURL = '../../../assets/images/home/img-';
        const totalImages = 21;

        for (let i = 0; i <= totalImages; i++) {
            const imageURL = `${baseURL}${i}.jpeg`;
            this.images.push(imageURL);
        }
    }

    startImageTimer() {
        this.ngZone.runOutsideAngular(() => {
            setInterval(() => {
                this.ngZone.run(() => {
                    this.changeImage();
                });
            }, 5000); // Change image every 5 seconds
        });
    }

    changeImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }
    
  
    
}
