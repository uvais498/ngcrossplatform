import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState , USER_FEATURE_KEY} from './user.model';

export const selectUserState = createFeatureSelector<UserState>(USER_FEATURE_KEY);

export const selectSession = createSelector(
  selectUserState,
  (state) => state.session
);

export const selectAccessToken = createSelector(
  selectSession,
  (session) => session?.access_token ?? null
);


export const selectIsAuthenticated = createSelector(
  selectSession,
  (session) => !!session?.access_token
);

export const selectLoading = createSelector(
  selectUserState,
  (state) => state.loading
);
