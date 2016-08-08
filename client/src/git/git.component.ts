import {Component} from 'angular2/core';
import {GitService} from './git.service';
import {UserComponent} from './user.component';

@Component({
    selector: 'git-app',
    template: require('./git.component.html'),
    providers: [GitService],
    directives: [UserComponent]
})
export class Git {

    private gitUser = [];

    constructor(private _gitService: GitService) {
    }
    
    getUsers(wantedUser){
      this._gitService.getUsers(wantedUser)
      .subscribe( res => {
        this.gitUser = res,
        console.log(this.gitUser)});
      
    }
}
