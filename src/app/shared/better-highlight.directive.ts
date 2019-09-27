import {Directive, ElementRef, HostListener, OnInit, Renderer, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private el: ElementRef, private redererer: Renderer2) {
  }

  ngOnInit(): void {
  }

  @HostListener('onmouseenter') mouseover(eventData: Event) {
    this.redererer.setStyle(this.el.nativeElement, 'background-color', 'blue');
  }

}
