import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  timer: number = null;
  eventNumber: number = 0;
  @Output() numberIncreased = new EventEmitter<{currentEventNumber: number}>();

  onStartTimer() {
    this.timer = window.setInterval(() => {
      this.numberIncreased.emit({currentEventNumber: ++this.eventNumber});
      console.log(this.eventNumber);
    }, 1000);
  }

  onStopTimer() {
    clearInterval(this.timer);
  }
}
