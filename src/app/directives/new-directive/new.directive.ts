import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNew]'
})
export class NewDirective {

  @HostBinding('style.backgroundColor') background: string;

  @HostListener('mouseenter') mouseEnter() {
    this.background = 'tomato'
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = 'transparent'
  }


}
