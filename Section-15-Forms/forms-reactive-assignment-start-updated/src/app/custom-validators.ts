import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
  static invalidProjectName(control: FormControl): {[key: string]: boolean} {
    if (control.value === 'Test')
      return {'projectNameForbidden': true};
    else
      return null;
  }

  static asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve,reject) => {
     setTimeout(() => {
      if (control.value === 'TestTwo')
        resolve({'projectNameForbidden': true});
      else
        resolve(null);
     }, 2000);
    });
    return promise;
  }
}
