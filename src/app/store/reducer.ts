import * as fromActions from './actions';

const initialState = {
  name: 'John', // Error: Property 'name' does not exist on type '{}'.
};

export function userReducer(state = initialState, action: fromActions.Actions): any {
  switch (action.type) {
    case fromActions.LOAD_USER:
      return { ...state, name: 'Jane' };
    default:
      return state;
  }
}
