import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sfc-pdf-viewer',
  templateUrl: './sfc-pdf-viewer.component.html',
  styleUrls: ['./sfc-pdf-viewer.component.scss'],
})
export class SfcPdfViewerComponent implements OnInit {
  @Input() public src =
    'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  constructor() {}

  ngOnInit() {}
}
