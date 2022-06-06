import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    CarsComponent,
    CarComponent
  ],
  imports: [
    BrowserModule, FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
