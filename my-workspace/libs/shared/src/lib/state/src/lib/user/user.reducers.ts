import { createReducer, on } from '@ngrx/store';
import  {UserActions} from './user.actions';
import { UserState, initialUserState } from './user.model';

export const userReducer = createReducer(
  initialUserState,

  on(UserActions.setSession, (state, { session }) => ({
    ...state,
    session
  })),

  on(UserActions.clearSession, (state) => ({
    ...state,
    session: null
  })),
  on(UserActions.login, (state) => ({ ...state, loading: true, error: null })),
  on(UserActions.loginSuccess, (state, { session }) => ({ ...state, session, loading: false })),
  on(UserActions.loginFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
