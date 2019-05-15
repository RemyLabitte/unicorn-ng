import {Component, Inject, OnInit} from '@angular/core';
import {Unicorn} from '../../../Unicorn';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UnicornsServiceService} from '../../../service/unicorns-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'uni-modify-unicorn',
  templateUrl: './modify-unicorn.component.html',
  styleUrls: ['./modify-unicorn.component.scss']
})
export class ModifyUnicornComponent implements OnInit {

  public unicornForm: FormGroup;

  static isAfter1800(control: FormControl) {
    return control.value >= 1800 ? null : {falseDate: true};
  }

  constructor(public dialogRef: MatDialogRef<ModifyUnicornComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Unicorn,
              private unicornService: UnicornsServiceService,
              fb: FormBuilder) {
    this.unicornForm = fb.group({
      name: [data.name, Validators.required],
      birthyear: [data.birthyear, [Validators.required, ModifyUnicornComponent.isAfter1800]],
      weight: [data.weight]
    });
  }

  ngOnInit() {
  }

  saveUnicorn(): void {
    this.unicornService.modifyUnicorn(this.data.id, this.data).subscribe(x => {
      this.dialogRef.close(x);
    });
  }
}
