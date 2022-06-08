import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { DirectivesComponent } from './directives/directives.component';
import { BackgroundDirective } from './directives/my-directives/background.directive';
import { NewDirective } from './directives/new-directive/new.directive';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    DirectivesComponent,
    BackgroundDirective,

    NewDirective
  ],
  imports: [
    BrowserModule, FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
