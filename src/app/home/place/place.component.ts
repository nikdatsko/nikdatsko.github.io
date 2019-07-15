import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../home.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  @Input() place: Place;

  constructor() {}

  ngOnInit() {}
}
