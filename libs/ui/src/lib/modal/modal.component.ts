import { Component, OnInit, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LontaraStyleService } from '../lontara-style.service';

@Component({
  selector: 'lontara-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(private styleService: LontaraStyleService) {}

  @Input() primaryButton = true;
  @Input() primaryButtonLabel = 'CONFIRM';
  @Input() secondaryButton = true;
  @Input() secondaryButtonLabel = 'CANCEL';
  @Input() dangerButton = false;
  @Input() dangerButtonLabel = 'DELETE';
  @Input() primaryButtonAction: any;
  @Input() secondaryButtonAction: any;
  @Input() dangerButtonAction: any;

  ngOnInit(): void {}

  get actionButtonStyle() {
    const { colors } = this.styleService.getInstance();
    const styles = {
      background: 'transparent',
      color: colors?.primary?.main,
      'border-style': 'solid',
      'border-width': '2px',
      'border-color': colors?.primary?.main
    };
    return this.styleService.createCss(styles);
  }
  get actionButtonPrimaryStyle() {
    const { colors } = this.styleService.getInstance();
    const styles = {
      background: colors?.primary?.main,
      color: colors?.primary?.text,
      'border-style': 'solid',
      'border-width': '2px',
      'border-color': colors?.primary?.main
    };
    return this.styleService.createCss(styles);
  }
  get actionButtonDangerStyle() {
    const { colors } = this.styleService.getInstance();
    const styles = {
      background: colors?.danger?.main,
      color: colors?.danger?.text,
      'border-style': 'solid',
      'border-width': '2px',
      'border-color': colors?.danger?.main
    };
    return this.styleService.createCss(styles);
  }

  _onPrimaryButtonClick() {
    if (this.primaryButtonAction) {
      this.primaryButtonAction();
    }
  }

  _onSecondaryButtonClick() {
    if (this.secondaryButtonAction) {
      this.secondaryButtonAction();
    }
  }

  _onDangerButtonClick() {
    if (this.dangerButtonAction) {
      this.dangerButtonAction();
    }
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [ModalComponent],
  exports: [ModalComponent],
})
export class ModalComponentModule {}
