// src/app/store/enum/enum.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnumState , ENUM_FEATURE_KEY, EnumName } from './enum.model';


export const selectEnumState = createFeatureSelector<EnumState>(ENUM_FEATURE_KEY);


export const selectEnumValues = (enumName: EnumName) =>
  createSelector(selectEnumState, (state) => state[enumName]?.values ?? []);

export const selectEnumLoading = (enumName: EnumName) =>
  createSelector(selectEnumState, (state) => state[enumName]?.loading ?? false);

export const selectEnumError = (enumName: EnumName) =>
  createSelector(selectEnumState, (state) => state[enumName]?.error ?? null);
