import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlStatus, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  statusOptions = ['Stable', 'Critical', 'Finished'];
  statusValid = false;

  ngOnInit() {
    this.projectForm = new FormGroup({
      // 'name': new FormControl(null, [Validators.required, this.projectNameForbiddenValidator]), // Regular Custom Validator
      'name': new FormControl(null, Validators.required, this.projectNameForbiddenAsyncValidator), // Async Custom Validator
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null)
    });
    this.projectForm.statusChanges.subscribe(
      (status: FormControlStatus) => {
        if (status == 'VALID')
          this.statusValid = true;
        else
          this.statusValid = false;
      }
    );
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  // projectNameForbiddenValidator(control: FormControl): {[key: string]: boolean} {
  //   if (control.value === 'Test')
  //     return {'projectNameForbidden': true};
  //   else
  //     return null;
  // }

  projectNameForbiddenAsyncValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve,reject) => {
     setTimeout(() => {
      if (control.value === 'Test')
        resolve({'projectNameForbidden': true});
      else
        resolve(null);
     }, 2000);
    });
    return promise;
  }
}
