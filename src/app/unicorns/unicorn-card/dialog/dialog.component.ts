import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Unicorn} from '../../unicorn';
import {UnicornsService} from '../../unicorns.service';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';

export interface DialogData {
  unicorn: Unicorn;
}

@Component({
  selector: 'uni-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  public updateForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              private unicornService: UnicornsService,
              @Inject(MAT_DIALOG_DATA) public unicorn: Unicorn,
              public fb: FormBuilder) {
    this.updateForm = fb.group({
      birthyear: [unicorn.birthyear, [Validators.required, DialogComponent.isOldEnough]],
      name: [unicorn.name]
    });
  }

  static isOldEnough(control: FormControl) {
    return control.value >= 1800 ? null : {tooYoung: true};
  }

  updateUnicorn(newUnicorn: Unicorn) {
    this.unicornService.updateUnicorn(newUnicorn).subscribe(
      unicorn => {
        this.dialogRef.close(unicorn);
    }
  );
  }
}
