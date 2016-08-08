import {Directive, ElementRef, Component} from 'angular2/core'

//*Directive
// to create a directive:
// 1- Create a class and decorate it with @Directive
// 2- Give it a selector
// 3- Define the host element in the HTML and which function should run with it
// 4- implement the function
@Directive({
  selector: '[highlight]',
  host: {
    '(mouseenter)': 'toggleHightlight()',
    '(mouseleave)': 'toggleHightlight(false)'
  },
  inputs: ['pos']
})
export class Highlight {
  pos: string;
  constructor(private _el: ElementRef) {}

  toggleHightlight(highlight=true) {
    const el = this._el.nativeElement;
    if(highlight){
    el.style.color = 'white';
    el.style.backgroundColor = '#55BFE0';
  } else {
    el.style.color = '';
    el.style.backgroundColor = '';
  }
}

}
