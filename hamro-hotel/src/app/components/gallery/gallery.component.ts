import { Component, OnInit } from '@angular/core';
import { GalleryDataService } from 'src/app/services/gallery-data-service';
import { ImageData } from '../gallery/gallery.interface';

type CardContent = {
    title: string;
    description: string;
    imageUrl: string;
};
@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
    cards: CardContent[] = [];
    imageUrls: ImageData[] = [];

    constructor(private galleryDataService: GalleryDataService) {}

    ngOnInit(): void {
        this.galleryDataService.getImageUrls().subscribe((data) => {
            this.imageUrls = data;
        });

        for (let i = 0; i < 100; i++) {
            this.cards.push({
                title: `Card ${i + 1}`,
                description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestias tempore asperiores ad deserunt pariatur totam velit veritatis, quis quo voluptatum, id magni. Laborum dolor fugiat magni, ea voluptate recusandae! `,
                imageUrl: `https://source.unsplash.com/random/500X500?sig=${i}`,
            });
        }
    }
}

// this.lists = [
//     { rows: 2, cols: 2, data: 1 },
//     { rows: 1, cols: 1, data: 2 },
//     { rows: 2, cols: 1, data: 3 },
//     { rows: 1, cols: 1, data: 4 },

//     { rows: 1, cols: 1, data: 5 },
//     { rows: 2, cols: 2, data: 6 },
//     { rows: 1, cols: 1, data: 7 },
//     { rows: 1, cols: 1, data: 8 },
//     { rows: 1, cols: 1, data: 9 },

//     { rows: 1, cols: 1, data: 10 },
//     { rows: 1, cols: 1, data: 11 },
//     { rows: 2, cols: 2, data: 12 },
//     { rows: 1, cols: 1, data: 13 },
//     { rows: 1, cols: 1, data: 14 },

//   ];
