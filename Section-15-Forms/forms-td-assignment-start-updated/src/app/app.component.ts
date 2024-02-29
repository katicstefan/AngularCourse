import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formEl') subForm: NgForm;
  defaultSub = 'advanced';
  formSubmitted = false;
  subscription: { email: string, sub: string, password: string };

  onSubmit() {
    this.formSubmitted = true;
    console.log(this.subForm.form.value);
    this.subscription = {
      email: this.subForm.form.value.email,
      sub: this.subForm.form.value.subscriptions,
      password: this.subForm.form.value.password
    }

    this.subForm.reset();
  }
}
