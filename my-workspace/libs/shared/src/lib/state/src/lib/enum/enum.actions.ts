import { createActionGroup, props } from '@ngrx/store';

export const EnumActions = createActionGroup({
  source: 'Enum',
  events: {
    'Load Enum': props<{ enumName: string }>(),
    'Load Enum Success': props<{ enumName: string, values: string[]  }>(),
    'Load Enum Failure': props<{ enumName: string, error: any }>(),
  },
});
