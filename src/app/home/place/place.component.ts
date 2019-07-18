import { Component, Input } from '@angular/core';
import { Place } from '../home.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent {
  @Input() place: Place;
}
