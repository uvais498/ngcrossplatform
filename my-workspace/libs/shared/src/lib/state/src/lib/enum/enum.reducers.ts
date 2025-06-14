import { createReducer, on } from '@ngrx/store';
import { initialState } from './enum.model';
import { EnumActions } from './enum.actions';


export const EnumReducer = createReducer(
  initialState,

  on(EnumActions.loadEnum, (state, { enumName }) => ({
    ...state,
    [enumName]: { values: [], loading: true, error: null },
  })),

  on(EnumActions.loadEnumSuccess, (state, { enumName, values }) => ({
    ...state,
    [enumName]: { values, loading: false, error: null },
  })),

  on(EnumActions.loadEnumFailure, (state, { enumName, error }) => ({
    ...state,
    [enumName]: { values: [], loading: false, error },
  }))
);