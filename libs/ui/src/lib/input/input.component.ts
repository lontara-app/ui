import { Component, NgModule, Input, Self, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { LontaraStyleService } from '../lontara-style.service';

@Component({
  selector: 'lontara-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements ControlValueAccessor {

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
  @Input() type = 'text';
  @Input() class = '';

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
}

@NgModule({
  imports: [CommonModule],
  declarations: [InputComponent],
  exports: [InputComponent],
})
export class InputComponentModule {}
