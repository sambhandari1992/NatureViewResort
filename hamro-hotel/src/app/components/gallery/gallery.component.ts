import { Component, OnInit } from '@angular/core';
import { GalleryDataService } from 'src/app/services/gallery-data-service';

import { ImageData } from './gallery.interface';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
    imageUrls: ImageData[] = [];

    title = 'gridemo';
    public lists: any = [];

    constructor(private galleryDataService: GalleryDataService) {}

    gridColumns = 3;

    toggleGridColumns() {
        this.gridColumns = this.gridColumns === 3 ? 4 : 3;
    }

    ngOnInit(): void {
        this.galleryDataService.getImageUrls().subscribe((data) => {
            this.imageUrls = data;
            console.log(this.imageUrls); // Check if the data is fetched properly
        });
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
