import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Highlight} from './highliight';
import {WidgetsService} from './widgets-service';

@Component({
  selector: 'widgets-list',
  template: `
  <div *ngFor="#widget of widgets" (click)="selected.emit(widget)"
    class="widget-card mdl-card mdl-shadow--2dp" highlight [pos]="widget.id">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">{{widget.name}}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      {{widget.price}}
    </div>
    <div class="mdl-card__menu">
      <button (click)="deleted.emit(widget); $event.stopPropagation();"
        class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i class="material-icons">close</i>
      </button>
    </div>
  </div>`,
  styles: [`
    .widget-card {
      transition: background-color .4s
    }`],
//Using the directive
// 1- Include it in directives
// 2- use it in the template :) ( see line 9)
  directives: [Highlight]
})
export class WidgetsList {
  @Input() widgets: any[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
