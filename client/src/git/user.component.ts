import {Component, Input, Output, EventEmitter} from 'angular2/core';


@Component({
    selector: 'user-app',
    template: 
            `<!--Git Form-->
            <form class="mdl-cell mdl-cell--6-col">
                    <div class="item-card mdl-card mdl-shadow--2dp">
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">Git Search</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                            <div class="mdl-textfield mdl-js-textfield">
                                    <input 
                                    (keyup.enter)="user.emit(wantedUser)" type="text" 
                                    [(ngModel)]="wantedUser" placeholder="Github username..." 
                                    class="mdl-textfield__input">
                            </div>
                        </div>
                        <div class="mdl-card__actions">
                                    <button type="submit" (click)="user.emit(wantedUser)" 
                                    class="mdl-button mdl-js-button mdl-js-ripple-effect" 
                                    class="mdl-button mdl-js-button mdl-button--colored mdl-js-ripple-effect">get info</button>
                        </div>
                    </div>
              </form>
                <!--Git List-->
                <div class="mdl-cell mdl-cell--6-col">
                <div class="item-card mdl-card mdl-shadow--2dp">
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Git Profile</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                            <div class="mdl-textfield mdl-js-textfield">
                                <h2>{{gitUser.login}}</h2>
                            </div>
                            <div class="mdl-textfield mdl-js-textfield">
                                <img src={{gitUser.avatar_url}} />
                            </div>
                    </div>
                </div>
                </div>`
})
export class UserComponent {

    @Input() gitUser;
    @Output() user = new EventEmitter();
}
