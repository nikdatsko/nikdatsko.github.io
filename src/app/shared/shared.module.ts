import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section/section.component';
import { PlaceComponent } from '../home/place/place.component';

@NgModule({
  declarations: [SectionComponent, PlaceComponent],
  imports: [CommonModule],
  exports: [SectionComponent, PlaceComponent]
})
export class SharedModule {}
