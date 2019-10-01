import { Place } from './home.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from './store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  readonly experienceStream: Observable<Place[]> = this.store.pipe(
    select(fromStore.getExperience)
  );
  readonly skillsStream: Observable<any> = this.store.pipe(
    select(fromStore.getSkills)
  );
  disableReorder = () => 0;

  constructor(private store: Store<fromStore.HomeRootState>) {
    this.store.dispatch(new fromStore.LoadData('experience'));
    this.store.dispatch(new fromStore.LoadData('skills'));
  }

  print() {
    window.print();
  }
}
