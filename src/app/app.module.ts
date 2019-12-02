import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QoutesComponent } from './qoutes/qoutes.component';
import { QoutesDetailComponent } from './qoutes-detail/qoutes-detail.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { QouteFormComponent } from './qoute-form/qoute-form.component';

 import { MomentModule } from "ngx-moment";


@NgModule({
  declarations: [
    AppComponent,
    QoutesComponent,
    QoutesDetailComponent,
    HighlightDirective,
    DateCountPipe,
    QouteFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MomentModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
