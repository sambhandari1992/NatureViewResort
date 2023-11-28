import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GalleryDataService } from 'src/app/services/gallery-data-service';

import { GalleryItem } from './gallery.interface';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
    galleryItems: GalleryItem[] = [];
    private subscription: Subscription | undefined;
    isLoaded: boolean = false;

    constructor(private galleryDataService: GalleryDataService) {}

    ngOnInit(): void {
        this.loadGalleryItems();
        this.shuffleArray(this.galleryItems);

    }

    loadGalleryItems(): void {
        this.subscription = this.galleryDataService.getImageUrls().subscribe({
            next: (data: GalleryItem[]) => {
                this.galleryItems = data;
                this.shuffleArray(this.galleryItems); 

            },
            error: (error: any) => {
                console.error('Error fetching gallery items:', error);
            },
            complete: () => {
                console.log('Gallery items loaded successfully!');
                  console.log('isLoaded =>' , this.isLoaded = true);
            },
        });
    }

    private shuffleArray(array: any[]): void {
        const shuffledArray = array.slice();
        shuffledArray.sort(() => Math.random() - 0.5); 
        this.galleryItems = [...new Set(shuffledArray)];
    }
    
    
    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
