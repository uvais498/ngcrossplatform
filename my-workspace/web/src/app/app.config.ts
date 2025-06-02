import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore,MetaReducer  } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { userReducer,UserEffects } from '@my-workspace/shared';
import { USER_FEATURE_KEY } from '@my-workspace/shared';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';

export function localStorageSyncReducer(reducer: any): any {
  return localStorageSync({
    keys: ['user'], 
    rehydrate: true,
  })(reducer);
}

export const metaReducers: MetaReducer[] = [localStorageSyncReducer];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideStore(
      { [USER_FEATURE_KEY]: userReducer },
      { metaReducers }
    ),
    provideEffects(UserEffects),
    provideStoreDevtools(),
],
};
