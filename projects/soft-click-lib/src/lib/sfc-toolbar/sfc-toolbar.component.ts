import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ScreenService } from '../core/screen.service';

@Component({
  selector: 'sfc-toolbar',
  templateUrl: './sfc-toolbar.component.html',
  styleUrls: ['./sfc-toolbar.component.scss'],
})
export class SfcToolbarComponent implements OnInit {
  @Output() public menuIconClick: EventEmitter<void> = new EventEmitter();
  constructor(public screen: ScreenService) {}

  ngOnInit() {}
}
