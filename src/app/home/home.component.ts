import { HomeService, Place } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  places: Place[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getExperience().subscribe(data => (this.places = data));
  }
}
