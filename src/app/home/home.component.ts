import { HomeService, Place } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  work: Place[] = [];
  education: Place[] = [];
  skills: any;
  disableReorder = () => 0;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getExperience().subscribe(data => (this.work = data));
    this.homeService.getEducation().subscribe(data => (this.education = data));
    this.homeService.getSkills().subscribe(data => (this.skills = data));
  }
}
