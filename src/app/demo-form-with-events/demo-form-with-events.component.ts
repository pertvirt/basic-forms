import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, AbstractControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-events',
  templateUrl: './demo-form-with-events.component.html',
  styleUrls: ['./demo-form-with-events.component.css']
})
export class DemoFormWithEventsComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });
    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe((value: string) => {
      console.log('sku changed to: ', value);
    });

    this.myForm.valueChanges.subscribe((form: any) => {
      console.log('form changed to: ', form);
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form.sku);
  }


}
