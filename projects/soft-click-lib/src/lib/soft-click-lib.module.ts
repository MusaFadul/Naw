import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SfcCardComponent } from './sfc-card/sfc-card.component';
import { SfcToolbarComponent } from './sfc-toolbar/sfc-toolbar.component';
import { SfcFooterComponent } from './sfc-footer/sfc-footer.component';

const components: any[] = [
  SfcToolbarComponent,
  SfcCardComponent,
  SfcFooterComponent,
];
@NgModule({
  declarations: [components],
  imports: [
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [components],
})
export class SoftClickLibModule {}
