import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'sfc-drawer',
  templateUrl: './sfc-drawer.component.html',
  styleUrls: ['./sfc-drawer.component.scss'],
})
export class SfcDrawerComponent implements OnInit {
  @Input('width') public drawerWidth: string = '200px';
  @ViewChild('drawer') sfcDrawer: MatDrawer = null!;
  constructor() {}

  ngOnInit() {}

  public open(): void {
    this.sfcDrawer.open();
  }
}
