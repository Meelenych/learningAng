import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";


@Directive({
  selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {
  constructor(private myElement: ElementRef, private myRenderer: Renderer2) { }

  ngOnInit(): void {
    // console.log(this.element)
    // this.myElement.nativeElement.style.backgroundColor = 'royalblue';

    const { nativeElement } = this.myElement // вытягиваем нейтив из элемента

    this.myRenderer.setStyle(nativeElement, 'background-color', 'blueviolet');
    this.myRenderer.addClass(this.myElement.nativeElement, 'white-text');
  }
}
