import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SfcCardComponent } from './sfc-card/sfc-card.component';
import { SfcToolbarComponent } from './sfc-toolbar/sfc-toolbar.component';
import { SfcFooterComponent } from './sfc-footer/sfc-footer.component';
import { SfcDrawerComponent } from './sfc-drawer/sfc-drawer.component';
import { CommonModule } from '@angular/common';
import { SfcPdfViewerComponent } from './sfc-pdf-viewer/sfc-pdf-viewer.component';

const components: any[] = [
  SfcToolbarComponent,
  SfcCardComponent,
  SfcFooterComponent,
  SfcDrawerComponent,
  SfcPdfViewerComponent,
];
@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    PdfViewerModule,
  ],
  exports: [components],
})
export class SoftClickLibModule {}
