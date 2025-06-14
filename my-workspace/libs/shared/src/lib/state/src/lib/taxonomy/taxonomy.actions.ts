import { createActionGroup, emptyProps, props,  } from '@ngrx/store';
import { Taxonomy  } from './taxonomy.model';

export const TaxonomyActions = createActionGroup({
  source: 'Taxonomy',
  events: {
    'Load Taxonomy': emptyProps(),
    'Load Taxonomy Success': props<{  value: Taxonomy[]  }>(),
    'Load Taxonomy Failure': props<{  error: any }>(),
  },
});
