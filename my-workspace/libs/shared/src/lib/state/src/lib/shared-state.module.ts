import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './user/user.reducers';
import { USER_FEATURE_KEY } from './user/user.model';

@NgModule({
  imports: [
    StoreModule.forFeature(USER_FEATURE_KEY, userReducer),
  ],
})
export class SharedStateModule {}
