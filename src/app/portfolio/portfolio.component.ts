import { Component, OnInit } from '@angular/core';
import { PortfolioService, Project } from './portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService
      .getProjects()
      .subscribe(data => (this.projects = data));
  }

  onImgLoad(item: Project) {
    item.loaded = true;
  }

  onImgError(item: Project) {
    item.fail = true;
  }
}
