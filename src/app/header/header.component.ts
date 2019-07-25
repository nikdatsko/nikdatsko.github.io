import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { filter, take, delay } from 'rxjs/operators';
import * as fromHome from '../home/store';
import { Place } from '../home/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  scrolled = false;

  constructor(
    private router: Router,
    private store: Store<fromHome.HomeRootState>
  ) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    this.scrolled = window.pageYOffset > 10;
  }

  print() {
    this.router.navigate(['/']).then(() => {
      combineLatest([
        this.store.pipe(select(fromHome.getExperience)),
        this.store.pipe(select(fromHome.getEducation)),
        this.store.pipe(select(fromHome.getSkills))
      ])
        .pipe(
          filter(
            ([x, y, z]: [Place[], Place[], any]) =>
              !!(x.length && y.length && !!z)
          ),
          take(1),
          delay(1)
        )
        .subscribe(() => {
          window.print();
        });
    });
  }
}
