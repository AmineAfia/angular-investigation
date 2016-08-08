import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {WidgetsService} from './widgets-service';
import {FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'widget-details',
  template: `<pre>{{selectedWidget | json}}</pre>
  <div class="item-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text" *ngIf="selectedWidget.id">Editing {{selectedWidget.name}}</h2>
      <h2 class="mdl-card__title-text" *ngIf="!selectedWidget.id">Create New Widget</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <form #widgetForm="ngForm" novalidate>
          <div class="mdl-textfield mdl-js-textfield">
            <label>Widget Name</label>
            <input [(ngModel)]="selectedWidget.name"
              placeholder="Enter a name"
              class="mdl-textfield__input" type="text">
          </div>

          <div class="mdl-textfield mdl-js-textfield">
            <label> Widget price</label>
            <input [(ngModel)]="selectedWidget.price"
              placeholder="Enter a price"
              class="mdl-textfield__input" type="text">
          </div>
      </form>
    </div>
    <div class="mdl-card__actions">
        <button type="submit" (click)="cancelledW.emit(selectedWidget)"
          class="mdl-button mdl-js-button mdl-js-ripple-effect">Cancel</button>
        <button type="submit" (click)="savedW.emit(selectedWidget)"
          class="mdl-button mdl-js-button mdl-button--colored mdl-js-ripple-effect">Save</button>
    </div>
  </div>`,
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})

export class WidgetDetails {

  @Input() selectedWidget: any[];

  @Output() savedW = new EventEmitter();
  @Output() cancelledW = new EventEmitter();

  // @Output() set widget(value: WidgetsService){
  //   if (value) this.originalName = value.name;
  //   this.selectedWidget = Object.assign({}, value);
  // }

}
