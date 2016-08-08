import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class GitService {

    constructor(private _http: Http) {}

    private user_url = 'https://api.github.com/users/';
    private CLIENT_ID = "8c0f4053047df9073b59";
    private SECRET_ID= "02a0d0d3af357a39264645d0fdf3d69b3d9211d3";
    private JSON_URL = "http://localhost:3000/widgets/";
    
    getUsers(wantedUser: string) {
        return this._http.get(this.user_url + wantedUser + `?client_id=${this.CLIENT_ID}&client_secret=${this.SECRET_ID}`)
        .map(res => res.json());
    }
}
