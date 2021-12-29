import {Component, OnInit, Input, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'pa-form-field',
  template: `
    <div class="p-inputgroup">
      <label *ngIf="label">{{label}}</label>
      <ng-content></ng-content>
    </div>
  `
})

export class FormFieldComponent implements OnInit {
  @Input()
  label: string = '';

  constructor() {
  }

  ngOnInit() {
  }
}

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FormFieldComponent
  ],
  declarations: [FormFieldComponent],
  providers: [],
})
export class FormFieldModule {
}
