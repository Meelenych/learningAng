import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
  selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {
  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    console.log(this.element)
    this.element.nativeElement.style.backgroundColor = 'royalblue'
  }
}
