import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faSwift } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css'],
})
export class ShowsComponent {
  faStar = faStar;
  faSwift = faSwift;
}
