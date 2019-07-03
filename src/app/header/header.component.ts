import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  scrolled = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    this.scrolled = window.pageYOffset > 10;
  }
}