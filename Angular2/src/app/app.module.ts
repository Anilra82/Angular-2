import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {routing} from "./app.router";
import {PageNotFoundComponent} from "./not-found.component";
import { TestComponent } from './test/test.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MusicComponent } from './music/music.component';
import { AboutComponent } from './about/about.component';
import {AppService} from "./app.service";
import {DataService} from "./data.service";
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    TestComponent,
    CalculatorComponent,
    MusicComponent,
    AboutComponent,
    FormComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AppService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
