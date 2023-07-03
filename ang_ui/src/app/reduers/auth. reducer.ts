import { createReducer, on } from '@ngrx/store';
import { signUp } from '../actions/auth.actions';

interface AuthInitialState {
  user: {} | null;
  errorMessage: string;
}

const authInitialState: AuthInitialState = {
  user: null,
  errorMessage: '',
};

export const authReducer = createReducer(
  authInitialState,
  on(signUp, (state) => ({ ...state, errorMessage: '' }))
);
