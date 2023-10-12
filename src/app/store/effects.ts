import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromActions from './actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions) {}


  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.LOAD_USER),
      switchMap(() => {
        return of({ type: fromActions.LOAD_USER_SUCCESS, payload: { name: 'Alice' } }); // Error: Property 'LOAD_USER_SUCCESS' does not exist on type 'typeof fromActions'.
      }),
      catchError(() => of({ type: fromActions.LOAD_USER_FAIL })) // Error: Property 'LOAD_USER_FAIL' does not exist on type 'typeof fromActions'.
    )
  );
}
