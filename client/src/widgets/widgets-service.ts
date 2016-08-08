import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WidgetsService {

  widgets = [];

  constructor(private _http: Http) {}

  private json_url = 'http://localhost:3000/widgets/';
  private HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

  getWidgets() {
      return this._http.get(this.json_url)
      .map(res => res.json())
  }

  saveWidget(widgets) {
    return this._http.post(`${this.json_url}`, JSON.stringify(widgets), this.HEADER)
      .map(res => res.json())
  }

  deleteWidget(widgets) {
    return this._http.delete(`${this.json_url}${widgets.id}`)
      .map(res => res.json())
  }

}
