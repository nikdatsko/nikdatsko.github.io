import { Place } from './home.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from './store';
import { DataTypes } from './home.enum';

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
  readonly skillsStream: Observable<{
    [key: string]: string[];
  }> = this.store.pipe(select(fromStore.getSkills));
  readonly experienceLoadingStream: Observable<boolean> = this.store.pipe(
    select(fromStore.getExperienceLoading)
  );
  readonly skillsLoadingStream: Observable<boolean> = this.store.pipe(
    select(fromStore.getSkillsLoading)
  );
  disableReorder = () => 0;

  constructor(private store: Store<fromStore.HomeRootState>) {
    this.store.dispatch(new fromStore.LoadData(DataTypes.experience));
    this.store.dispatch(new fromStore.LoadData(DataTypes.skills));
  }
}
