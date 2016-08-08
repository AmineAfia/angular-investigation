import {Component, Input, ViewEncapsulation} from 'angular2/core';
import {WidgetsService} from './widgets-service';
import {RouteParams, RouterLink, Router} from 'angular2/router';
import {WidgetsList} from './widgets-list.component';
import {WidgetDetails} from './widget-details.component';

@Component({
  selector: 'widgets',
  template:  require('./widgets.html') ,
  directives: [WidgetsList, WidgetDetails, RouterLink],
  providers: [WidgetsService],

  styles: [`
          h2 {
            color: #6495ED
          }
          background-color: #778899;
          `],
//*Encapsulation
// for more informations visit this Plunk: http://plnkr.co/edit/bHcPT82l29i7muA1lZED?p=preview 
  encapsulation: ViewEncapsulation.Emulated //Try None and Native
})
export class Widgets {
widgets = [];
selectedWidget = {};

  constructor(private _widgetsService: WidgetsService) {
    // this.widgets = _widgetsService.widgets;
    this.getWidgets();

  }

  getWidgets() {
    this._widgetsService.getWidgets()
    .subscribe(widgets => this.widgets = widgets);
  }

  selectWidget(selectedWidget: Widgets) {
    this.selectedWidget = selectedWidget;
  }

  resetWidget() {
    let emptyWidget = {name: '', price: '', id: null};
    this.selectedWidget = emptyWidget;
    
  }

  saveWidget(selectedWidget) {
    if(selectedWidget.id){
        console.log('from saveWidget', selectedWidget);
        this._widgetsService.saveWidget(this.selectedWidget)
        .subscribe(selectedWidget => { this.selectedWidget})
        // this.widgets.push(this.selectedWidget);})
    } else {
    this._widgetsService.saveWidget(this.selectedWidget)
    .subscribe(selectedWidget => {
        this.widgets.push(selectedWidget);
        console.log('saved and pushed');
      })
    }
   this.resetWidget();
  }

  deleteWidget(selectedWidget) {
    this._widgetsService.deleteWidget(selectedWidget)
    .subscribe(() => {
        this.widgets.splice(this.widgets.indexOf(selectedWidget), 1);
        console.log('deleted');
      })
    this.resetWidget();
  }
}
