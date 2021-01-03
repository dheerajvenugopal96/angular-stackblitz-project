import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() starRating: number;

  starWidth: number;

  @Output() displayRating: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnChanges(): void {
    this.starWidth = (this.starRating * 75) / 5;
  }

  ratingClicked() {
    this.displayRating.emit(`The rating ${this.starRating} was clicked`);
  }
}
