import { Component, OnInit, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LontaraStyleService } from '../lontara-style.service';

@Component({
  selector: 'lontara-button',
  templateUrl: './button.component.html',
  styles: [],
})
export class ButtonComponent implements OnInit {
  constructor(private readonly styleService: LontaraStyleService) {}

  @Input() variant = 'primary';
  @Input() size = 'medium';
  @Input() onClick: any = null;
  @Input() class = '';
  @Input() icon = '';
  @Input() noPadding = false;

  public styles: any = {};

  ngOnInit(): void {
    this.generateStyles();
  }

  generateStyles() {
    const colors: any = {
      ...this.styleService.getInstance().colors
    };
    const { fonts } = this.styleService.getInstance();
    let bg, border, color;
    if (this.variant === 'outline') {
      bg = 'transparent';
      border = colors['primary'].main;
      color = colors['primary'].main;
    } else {
      bg = colors[this.variant].main;
      border = colors[this.variant].main;
      color = colors[this.variant].text;
    }
    
    let fontSize = fonts?.size?.sm;
    let padding = '0.5rem 1rem';
    let rounded = '0.75rem';
    if (this.size === 'large' || this.size === 'lg') {
      padding = '0.75rem 1.5rem';
      fontSize = fonts?.size?.base;
      rounded = '1rem';
    }

    if (this.size === 'small' || this.size === 'sm') {
      padding = '0.25rem 0.75rem';
      fontSize = fonts?.size?.xs;
      rounded = '0.5rem';
    }
    
    this.styles = {
      background: bg,
      border: '1px solid ' + border,
      color: color,
      'font-size': fontSize,
      'font-weight': 500,
      padding: this.noPadding ? '0' : padding,
      'border-radius': rounded,
    }
  }

  get css() {
    return this.styleService.createCss(this.styles);
  }

  _onClick = (event: any) => {
    if (this.onClick) {
      this.onClick(event);
    }
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonComponentModule {}
