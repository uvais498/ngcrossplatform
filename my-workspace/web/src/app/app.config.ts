import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { userReducer,UserEffects } from '@my-workspace/shared';
import { USER_FEATURE_KEY } from '@my-workspace/shared';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
     provideStore({
      [USER_FEATURE_KEY]: userReducer
    }),
    provideEffects(UserEffects),
    provideStoreDevtools(),
],
};
