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
export class HeaderComponent {}
