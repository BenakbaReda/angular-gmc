import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()  ColorIn = 'gray'; 
  @Input()  ColorOut = 'yellow'; 
  @HostBinding('style.backgroundColor') BcColor= this.ColorOut; 

  
  constructor() { }

  
  @HostListener('mouseenter')  OnMouseEnter()
  {
      this.BcColor= this.ColorIn;
  }

  @HostListener('mouseleave')  OnMouseLeave()
  {
    this.BcColor= this.ColorOut;
  }
  
}
