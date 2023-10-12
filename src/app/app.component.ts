import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/state';
import * as fromActions from './store/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="user$ | async as user">
      <h1>Hello, {{ user.name }}!</h1>
      <button (click)="loadUser()">Load User</button>
    </div>
  `,
})
export class AppComponent implements OnInit {
  user$: Observable<any>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.user$ = this.store.select((state) => state.user); // Error: Property 'user' does not exist on type 'Object'.
  }

  loadUser() {
    this.store.dispatch(new fromActions.LoadUser()); // Error: Property 'LoadUser' does not exist on type 'typeof fromActions'.
  }
}
