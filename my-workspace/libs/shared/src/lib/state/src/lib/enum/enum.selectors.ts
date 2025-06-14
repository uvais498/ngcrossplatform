// src/app/store/enum/enum.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnumState , ENUM_FEATURE_KEY } from './enum.model';


export const selectEnumState = createFeatureSelector<EnumState>(ENUM_FEATURE_KEY);


export const selectEnumValues = (enumName: string) =>
  createSelector(selectEnumState, (state) => state[enumName]?.values ?? []);

export const selectEnumLoading = (enumName: string) =>
  createSelector(selectEnumState, (state) => state[enumName]?.loading ?? false);

export const selectEnumError = (enumName: string) =>
  createSelector(selectEnumState, (state) => state[enumName]?.error ?? null);
