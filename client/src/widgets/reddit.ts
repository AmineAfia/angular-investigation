import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

@Injectable()
export class RedditService {
  constructor(private _http: Http) {}

  private reddit_url = 'https://www.reddit.com/.json'
  fetchFrontPage() {
    return this._http.get(this.reddit_url)
    .map(res => res.json().data.children.map(({data}) => {
      return {
        author: data.author,
        title: data.title
      }
    }));
  }
}