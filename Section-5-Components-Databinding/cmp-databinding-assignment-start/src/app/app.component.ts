import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberEvents: number[] = [];

  onNumberIncreased(event: {currentEventNumber: number}) {
    this.numberEvents.push(event.currentEventNumber);
  }
}
