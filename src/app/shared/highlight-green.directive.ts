import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlightGreen]'
})
export class HighlightGreenDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = 'green';
    this.el.nativeElement.style.color = 'white';
  }


}
