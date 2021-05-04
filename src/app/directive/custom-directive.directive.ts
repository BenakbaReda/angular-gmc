import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
 @HostBinding('style.color') color ="#1f1f1f";
 @HostBinding('style.borderColor') bordercolor="#1f1f1f";;

  get_random_color() 
  {
    var r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
  }
  constructor() { }

  @HostListener('keyup') changeColorOnKeyUp()
  {

    this.color =this.get_random_color();

    this.bordercolor = this.get_random_color();
  }

}
