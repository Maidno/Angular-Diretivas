import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  
  @HostListener('mouseenter') onMouseOver(){
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'yellow'
    );*/
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseout') onMouseOut(){
   /* this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'purple'
    );*/
    this.backgroundColor = 'purple';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(
    //private _elementRef: ElementRef,
    //private _renderer: Renderer
  ) { }

}
