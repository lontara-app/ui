import { Component, OnInit, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerService } from '../drawer.service';
import { LontaraStyleService } from '../lontara-style.service';

@Component({
  selector: 'lontara-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  show = false;
  constructor(
    private drawerService: DrawerService,
    private styleService: LontaraStyleService
  ) {
    this.drawerService.onChange.subscribe((show) => {
      this.show = show;
    });
  }
  @Input() class = '';
  @Input() enableDrawer = true;
  @Input() secondaryNavbar = true;
  @Input() secondaryNavbarBg = '';
  @Input() secondaryNavbarColor = '';
  @Input() primaryNavbarBg = '';
  @Input() primaryNavbarColor = '';
  ngOnInit(): void {}

  get secondaryBg(): string | undefined {
    return (
      this.secondaryNavbarBg ||
      this.styleService.getInstance().colors?.secondary?.main
    );
  }

  get secondaryColor(): string | undefined {
    return (
      this.secondaryNavbarColor ||
      this.styleService.getInstance().colors?.secondary?.text
    );
  }

  get primaryBg() {
    return (
      this.primaryNavbarBg ||
      this.styleService.getInstance().colors?.primary?.main
    );
  }

  get primaryColor() {
    return (
      this.primaryNavbarColor ||
      this.styleService.getInstance().colors?.primary?.text
    );
  }

  toggle() {
    this.drawerService.toggle();
  }

  onResize(event: any) {
    if (this.show === true) {
      this.drawerService.hide();
    }
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class NavbarComponentModule {}
