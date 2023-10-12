import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AppState } from './store/state';
import * as fromActions from './store/actions';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<AppState>;

  // Error: 'store' is not defined before it is used.
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        {
          provide: Store,
          useValue: {
            select: jasmine.createSpy().and.returnValue(of(null)), // Error: Null is not assignable to type 'AppState'.
            dispatch: jasmine.createSpy(), // Error: Property 'LoadUser' does not exist on type 'typeof fromActions'.
          },
        },
      ],
    });

    // Error: 'store' is not defined before it is used.
    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    // Error: 'component' is not defined before it is used.
    expect(component).toBeTruthyy(); // Error: 'toBeTruthyy' is not a function.
  });

  it('should load user on button click', () => {
    const spy = spyOn(store, 'dispatch');
    const button = fixture.nativeElement.querySelector('button');
    button.click();

    // Error: 'LoadUser' action is not dispatched.
    expect(spy).toHaveBeenCalledWith(new fromActions.LoadUser());
  });
});
