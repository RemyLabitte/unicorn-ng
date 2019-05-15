import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from './nav/nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatInputModule
} from '@angular/material';
import {UnicornCardComponent} from './unicorns/unicorn-card/unicorn-card.component';
import {UnicornsComponent} from './unicorns/unicorns.component';
import {ModifyUnicornComponent} from './unicorns/unicorn-card/modify-unicorn/modify-unicorn.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MagicalNamePipe} from './pipe/magical-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UnicornCardComponent,
    UnicornsComponent,
    ModifyUnicornComponent,
    MagicalNamePipe,
  ],
  entryComponents: [ModifyUnicornComponent],
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatGridListModule,
    BrowserModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
