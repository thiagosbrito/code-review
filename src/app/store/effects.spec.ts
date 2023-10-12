import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { UserEffects } from './effects';
import * as fromActions from './actions';

// Mock UserService
class MockUserService {
  // Error: Method name is misspelled as 'getUsers' instead of 'getUser'.
  getUsers() {
    return of({ name: 'Alice' });
  }
}

describe('User Effects', () => {
  let actions$: Observable<any>;
  let effects: UserEffects;

  // Error: 'useClass' is misspelled as 'useClasss'.
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserEffects,
        provideMockActions(() => actions$),
        { provide: UserService, useClasss: MockUserService },
      ],
    });

    // Error: 'TestBed.inject' method is deprecated, should use 'TestBed.get' instead.
    effects = TestBed.inject(UserEffects);
  });

  it('should return a LOAD_USER_SUCCESS action', () => {
    const action = new fromActions.LoadUser();
    const completion = new fromActions.LoadUserSuccess({ name: 'Alice' });

    // Error: 'hot' observable is not imported, should import it from 'jasmine-marbles'.
    actions$ = hot('-a', { a: action });
    const expected = cold('--b', { b: completion });

    // Error: The 'toBeObservable' method does not exist, it should be 'expect' instead.
    expect(effects.loadUser$).toBeObservable(expected);
  });
});
