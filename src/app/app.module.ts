import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { userReducer } from './store/reducers';  // this path does not exist (correct is ./store/reducer)
import { UserEffects } from './store/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ user: userReducer }), // Error: Property 'userReducer' does not exist on type 'typeof import(...)'.
    EffectsModule.forRoot([UserEffects]), // Error: Property 'UserEffects' does not exist on type 'typeof import(...)'.
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
