import { createReducer, on } from '@ngrx/store';
import  { TaxonomyActions } from './taxonomy.actions';
import { TaxonomyState, initialTaxonomyState } from './taxonomy.model';

export const TaxonomyReducer = createReducer(
  initialTaxonomyState,

  on(TaxonomyActions.loadTaxonomy, state => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(TaxonomyActions.loadTaxonomySuccess, (state, { value }) => ({
    ...state,
    value,
    loading: false,
    error: null,
  })),

  on(TaxonomyActions.loadTaxonomyFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
