// src/app/store/enum/enum.effects.ts
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import  {EnumActions} from './enum.actions';
import { EnumsService } from '../../../../services/enums.service';
import { catchError, from, map, mergeMap, of } from 'rxjs';

@Injectable()
export class EnumEffects {
     actions$ = inject(Actions);
  loadEnum$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EnumActions.loadEnum),
      mergeMap(({ enumName }) =>
        from(this.enumService.getEnums(enumName)).pipe(
          map((values: string[]) =>
            EnumActions.loadEnumSuccess({ enumName, values })
          ),
          catchError((error) =>
            of(EnumActions.loadEnumFailure({ enumName, error }))
          )
        )
      )
    )
  );

  constructor( private enumService: EnumsService) {}
}
