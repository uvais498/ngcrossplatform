import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, pipe } from "rxjs";
import { TaxonomyActions } from "./taxonomy.actions";
import { TaxonomyService } from "../../../../services/taxonomy.service";

@Injectable()
export class TaxonomyEffects {
     actions$= inject(Actions)
  constructor(
    private taxonmyService: TaxonomyService
  ) {}

  loadTaxonomies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaxonomyActions.loadTaxonomy),
      mergeMap(() =>
        this.taxonmyService.getTaxonmy().then(
          (value) => TaxonomyActions.loadTaxonomySuccess({ value : value }),
          (error) => TaxonomyActions.loadTaxonomyFailure({ error })
        )
      )
    )
  );
}
