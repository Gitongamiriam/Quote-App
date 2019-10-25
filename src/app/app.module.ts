import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QoutesComponent } from './qoutes/qoutes.component';
import { QoutesDetailComponent } from './qoutes-detail/qoutes-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QoutesComponent,
    QoutesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
