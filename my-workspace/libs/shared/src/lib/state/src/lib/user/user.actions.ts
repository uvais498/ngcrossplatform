import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { Session } from './user.model';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Login': props<{ email: string; password: string }>(),
    'Login Success': props<{ session: Session }>(),
    'Login Failure': props<{ error: any }>(),
    'LogOut Failure': props<{ error: any }>(),
    'Set Session': props<{ session: Session }>(),
    'Clear Session': emptyProps(),
    'Log Out' : emptyProps(),
  },
});
