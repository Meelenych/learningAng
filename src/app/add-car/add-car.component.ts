import { AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { AfterContentChecked, AfterContentInit } from '@angular/core';
import { OnChanges, SimpleChanges, Component, OnInit, DoCheck } from '@angular/core';


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  colors = ['tomato', 'orange', 'yellow', 'royalblue', 'magenta', 'cyan', 'white'];

  nameToChange = 'Old car';
  changeCarName() {
    this.nameToChange = 'New car'
  }

  destroy() {
    this.colors.splice(0, 1)
  }

  constructor() {
    //first life stage = initialization of component
    console.log('constructor')
  }

  ngOnInit(): void {
    //second life stage = OnInit
    console.log('ngOnInit')
  }

  ngOnChanges(changes: SimpleChanges): void {
    // third life stage = OnChanges, единственный цикл, который принимает в себя параметры
    console.log('ngOnChanges', changes)
  }

  ngDoCheck(): void {
    //fourth life stage = DoCheck
    console.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    //fifth life stage = AfterContentInit
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    //sixth life stage = AfterContentChecked
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    //seventh life stage = AfterContentChecked
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    //eighth life stage = AfterContentChecked
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    //ninth life stage = AfterContentChecked
    console.log('ngOnDestroy')
  }
}
