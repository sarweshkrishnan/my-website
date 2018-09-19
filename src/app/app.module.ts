import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { DetailsComponent } from './details/details.component';
import { RssService } from './rss.service';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [
    RssService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
