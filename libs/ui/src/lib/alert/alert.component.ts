import { Component, OnInit, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LontaraStyleService } from '../lontara-style.service';
import { LontaraAlertService } from '../lontara-alert.service';

@Component({
  selector: 'lontara-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  private ALERT_DURATION = 5000; // Durasi dalam miliseconds

  constructor(
    private alertService: LontaraAlertService,
    private styleService: LontaraStyleService
    ) {
      this.alertService.onError.subscribe((res) => {
        //console.log(res);
        this.show = res.error;
        this.message = res.message;
        this.variant = res.variant;
        setTimeout(() => {
          this.alertService.setError('');
        }, this.ALERT_DURATION);
      });
    }

  @Input() class = '';

  show = false;
  message = '';
  variant = 'default';
  styles: any = {};

  ngOnInit(): void {}

  get css() {
    const { colors, fonts } = this.styleService.getInstance();
    const customColors: any = {
      ...colors
    };

    const type = this.variant === 'default' ? 'black' : this.variant;
    this.styles = {
      color: customColors[type].main,
      background: customColors[type].surface,
      'border-color': customColors[type].border,
      // display:'flex',
      // 'flex-direction': 'row',
      // 'align-items': 'center',
      // padding: '0.25rem',
      // 'border-radius': '0.75rem',
      'font-family': fonts?.fontFamily,
      'font-size': fonts?.size?.sm,
      //'font-weight': 500
    }
    return this.styleService.createCss(this.styles);
  }

  get svgCss() {
    const colors: any = {
      ...this.styleService.getInstance().colors
    };

    const type = this.variant === 'default' ? 'black' : this.variant;
    const styles = {
      color: colors[type].main,
    }
    return this.styleService.createCss(styles);
  }

  _onDismiss() {
    this.alertService.setError('');
  }
  
}

@NgModule({
  imports: [CommonModule],
  declarations: [AlertComponent],
  exports: [AlertComponent],
})
export class AlertComponentModule {}
