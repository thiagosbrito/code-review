import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromActions from './actions';
import { UserService } from '../services/user.service';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}


  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.LOAD_USER),
      switchMap(() => this.userService.getUsers()), // Error: Users are not dispatched to the store, so in this case we are not able to select users from store on app.component
      catchError(() => of({ type: fromActions.LOAD_USER_FAIL })) // Error: Property 'LOAD_USER_FAIL' does not exist on type 'typeof fromActions'.
    )
  );
}
