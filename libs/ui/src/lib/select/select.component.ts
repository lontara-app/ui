import { Component, NgModule, Self, Optional, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { LontaraStyleService } from '../lontara-style.service';

@Component({
  selector: 'lontara-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements ControlValueAccessor {
  constructor(
    @Self()
    @Optional()
    private ngControl: NgControl,
    private styleService: LontaraStyleService,
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }
  
  value:any;

  @Input() disabled: boolean | undefined;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() options: any[] = [];
  @Input() class = '';
  @Input() labelField = 'label';
  @Input() valueField = 'value';

  get isValid() {
    return this.ngControl.valid;
  }

  get errorColor() {
    return this.styleService.getInstance().colors?.danger?.main;
    //return '#ff0000';
  }

  onChange: (_: any) => void = (_: any) => {};

  onTouched: () => void = () => {};

  updateChanges() {
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    this.value = value;
    this.updateChanges();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  handleChange(value: any) {
    this.value = value;
    this.updateChanges();
  }
}

@NgModule({
  imports: [CommonModule, NgSelectModule, FormsModule],
  declarations: [SelectComponent],
  exports: [SelectComponent],
})
export class SelectComponentModule {}
