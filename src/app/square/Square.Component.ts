import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './app-square.component.html',
  styleUrls: ['./app-square.component.css']
})

export class SquareComponent {
@Input() value: 'x' | 'o';



}
