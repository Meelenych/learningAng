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
import { HoverDirective } from './directives/hover/hover.directive';
import { PipesComponent } from './pipes/pipes.component';
import { OwnPipesComponent } from './own-pipes/own-pipes.component';
import { PowPipe } from './own-pipes/my-pipe/pow.pipe';
import { TestPipe } from './own-pipes/test-pipe/test.pipe';
import { FilterComponent } from './filter/filter.component';
import { FilterPipe } from './own-pipes/car-filter/filter.pipe';
import { BuyCarComponent } from './buy-car/buy-car.component';
import { ConsoleService } from './buy-car/console.service';
import { CarsService } from './buy-car/cars.service';
import { FormsComponent } from './forms/forms.component'

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    DirectivesComponent,
    BackgroundDirective,
    PowPipe,
    NewDirective,
    HoverDirective,
    PipesComponent,
    OwnPipesComponent,
    TestPipe,
    FilterComponent,
    FilterPipe,
    BuyCarComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
  ],
  providers: [CarsService, ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
