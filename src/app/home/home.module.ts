import { metaReducers } from './../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PlaceComponent } from './place/place.component';
import { effects, reducers, homeStorage } from './store';

@NgModule({
  declarations: [HomeComponent, PlaceComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    StoreModule.forFeature('home', reducers, { metaReducers: [homeStorage] }),
    EffectsModule.forFeature(effects)
  ]
})
export class HomeModule {}
