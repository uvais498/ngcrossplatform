import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SupabaseclientService } from '../../../../services/supabaseclient.service';
import { UserActions } from './user.actions';
import { catchError, exhaustMap, from, map, of, switchMap, tap } from 'rxjs';

@Injectable()
    
export class UserEffects {
    actions$ = inject(Actions);
 login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.login),
      tap(({ email }) => console.log('Login effect triggered for:', email)),
      switchMap(({ email, password }) =>
        from(this.supabase.supabase.auth.signInWithPassword({ email, password })).pipe(
          tap(response => console.log('Supabase response:', response)),
          map(({ data, error }) => {
            if (error || !data.session) {
              throw error ?? new Error('No session returned');
            }
            return UserActions.loginSuccess({ session: data.session });
          }),
          catchError(error => {
            console.error('Login failed:', error);
            return of(UserActions.loginFailure({ error }));
          })
        )
      )
    )

);


  constructor(
    
    private supabase: SupabaseclientService
  ) {}
}