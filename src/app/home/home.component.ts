import { HomeService, Place } from './home.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { DataTypes } from './home.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  readonly experienceStream: Observable<Place[]> = this.homeService.getData(DataTypes.experience);
  readonly skillsStream: Observable<{[key: string]: string[]}> = this.homeService.getData(DataTypes.skills);
  readonly pdfLink = 'https://www.sejda.com/html-to-pdf?' +
    'save-link=' + encodeURIComponent("https://nikdatsko.github.io/") +
    '&pageOrientation=portrait' +
    '&pageMargin=40px' +
    '&usePrintMedia=true' +
    '&delay=2' +
    '&pageSize=letter';
  disableReorder = () => 0;

  constructor(private homeService: HomeService) {}
}
