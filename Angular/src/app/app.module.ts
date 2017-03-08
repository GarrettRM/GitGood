import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {routing} from './app.routing';

import { MainComponent } from './main/main.component';
import { AboutComponent } from './about.component';
import { AppComponent }  from './app.component';


@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, routing],
  declarations: [ AppComponent, AboutComponent, MainComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
