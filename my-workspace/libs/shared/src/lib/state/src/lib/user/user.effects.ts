import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SupabaseclientService } from '../../../../services/supabaseclient.service';
import { UserActions } from './user.actions';
import { catchError, exhaustMap, from, map, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
    
export class UserEffects {
    actions$ = inject(Actions);
    router$ = inject(Router)
login$ = createEffect(() =>
  this.actions$.pipe(
    ofType(UserActions.login),
    exhaustMap(({ email, password }) =>
      from(this.supabase.supabase.auth.signInWithPassword({ email, password })).pipe(
        map(({ data, error }) => {
          if (error || !data.session) {
            throw error ?? new Error('No session returned');
          }
          return UserActions.loginSuccess({ session: data.session });
        }),
        catchError(error => {
          return of(UserActions.loginFailure({ error }));
        })
      )
    )
  )
);


logout$ = createEffect(() =>
  this.actions$.pipe(
    ofType(UserActions.logOut),
    switchMap(() =>
      from(this.supabase.supabase.auth.signOut()).pipe(
        tap(() => this.router$.navigate(['/login'])),
        switchMap(() => [
          UserActions.clearSession()
        ]),
        catchError(err => {
          console.error('Supabase logout error', err);
          return of(UserActions.logOutFailure({ error: err }));
        })
      )
    )
  )
);





  constructor(
    private supabase: SupabaseclientService
  ) {}
}