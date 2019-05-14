import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatBadgeModule,
} from '@angular/material';
import { UnicornsComponent } from './unicorns/unicorns.component';
import { UnicornsService } from './unicorns/unicorns.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule} from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { DialogComponent } from './unicorns/unicorn-card/dialog/dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { UnicornCardComponent } from './unicorns/unicorn-card/unicorn-card.component';
import { MagicalPipe } from './pipes/magical.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UnicornsComponent,
    DialogComponent,
    UnicornCardComponent,
    MagicalPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    ReactiveFormsModule,
  ],
  providers: [UnicornsService, MatDialog],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
