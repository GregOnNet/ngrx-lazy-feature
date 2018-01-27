import { Action } from '@ngrx/store';

export function mainReducer(state = { message: 'Hi' }, action: Action) {
  return state;
}
