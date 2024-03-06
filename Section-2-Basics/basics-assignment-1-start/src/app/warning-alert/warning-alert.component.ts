import { Component } from "@angular/core";

@Component({
  selector: 'app-warning-alert',
  template: `
    <b>This is the WarningAlert </b>
    <p>WARNING! This is a warning</p>
  `,
  styles: [`
    p {
      color: red;
    }
  `]
})
export class WarningAlertComponent { }
