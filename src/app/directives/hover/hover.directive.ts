import { Directive, Input, HostListener, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  @Input() hoverColor: string = 'yellowgreen'
  @Input() defaultColor: string = 'cyan'

  @HostBinding('style.backgroundColor') background: string;

  ngOnInit() { this.background = this.defaultColor; }

  @HostListener('mouseenter') mouseEnter() {
    this.background = this.hoverColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = this.defaultColor;
  }
}
