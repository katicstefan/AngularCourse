import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  enableDisplayDetailsButton = true;
  buttonClicks: Array<{time: number, status: boolean}> = [];

  onClickButtonDisplayDetails(event) {
    this.enableDisplayDetailsButton = !this.enableDisplayDetailsButton;
    this.buttonClicks.push({time: event.timeStamp, status: this.enableDisplayDetailsButton});
  }
}
