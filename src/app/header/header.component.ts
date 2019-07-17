import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  scrolled = false;

  constructor(private router: Router) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    this.scrolled = window.pageYOffset > 10;
  }

  print() {
    this.router.navigate(['/']).then(() => {
      window.print();
    });
  }
}
