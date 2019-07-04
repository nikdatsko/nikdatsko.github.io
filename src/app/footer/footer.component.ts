import { select, Store } from '@ngrx/store';
import { Component } from '@angular/core';
import * as fromStore from '../store';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly footerWordStream = this.store.pipe(select(fromStore.getFooterWord));
  constructor(private store: Store<fromStore.State>) {}
}
