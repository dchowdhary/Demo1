import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SimpleFormComponent } from './app.simpleform';
import { ValidationsComponent } from './app.validations'
import { ComplexFormComponent } from './app.complexform';
import { LoginComponent } from './app.login'


@NgModule({
  imports:      [ BrowserModule,FormsModule, ReactiveFormsModule, HttpModule ],
  declarations: [ AppComponent,SimpleFormComponent],
  bootstrap:    [ AppComponent,SimpleFormComponent]
})
export class AppModule { }
