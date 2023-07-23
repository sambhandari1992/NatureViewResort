import { Component } from '@angular/core';


type LocalAttraction = {
  name: string;
  description: string;
  imageUrl: string;
};

@Component({
  selector: 'app-local-attrection',
  templateUrl: './local-attrection.component.html',
  styleUrls: ['./local-attrection.component.scss'],
})
export class LocalAttrectionComponent {

  localAttractions: LocalAttraction[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 1; i <= 20; i++) {
      this.localAttractions.push({
        name: `Local Attraction ${i}`,
        description: `Description of Local Attraction ${i}.`,
        imageUrl: `https://source.unsplash.com/random/500x500?sig=${i}`,
      });
    }
  }

}
