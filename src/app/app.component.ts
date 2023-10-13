import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/state';
import * as fromActions from './store/actions';
import { Observable } from 'rxjs';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="user$ | async as user">
      <h1>Hello, {{ user.name }}!</h1>
      <button (click)="loadUser()">Load User</button>
    </div>
  `,
})
export class AppComponent { // Error: missing implements OnInit, OnDestroy
  user$: Observable<any>;
  _userList: Array<User>; // Error: no need to store the data in a separate variable for this case, we can subscribe directly from the template using async pipe

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.user$ = this.store.select((state) => state.user); // Error: Property 'user' does not exist on type 'Object'.
    this.user$.subscribe((users) => this._userList = users); // Error: No unsubscribe on ngOnDestroy
  }

  loadUser() {
    this.store.dispatch(new fromActions.LoadUser()); // Error: Property 'LoadUser' does not exist on type 'typeof fromActions'.
  }
}
