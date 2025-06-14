import { createActionGroup, props,  } from '@ngrx/store';
import { EnumName } from './enum.model';

export const EnumActions = createActionGroup({
  source: 'Enum',
  events: {
    'Load Enum': props<{ enumName: EnumName  }>(),
    'Load Enum Success': props<{ enumName: EnumName, values: string[]  }>(),
    'Load Enum Failure': props<{ enumName: EnumName, error: any }>(),
  },
});
