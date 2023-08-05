import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  boxes: number[] = Array.from({ length: 19 }, (_, i) => i + 1);

  
}
