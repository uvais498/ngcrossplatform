// import { Session } from '@supabase/auth-js';
export const USER_FEATURE_KEY = 'user';

export interface Session {
  access_token: string;
  refresh_token: string;
  expires_at?: number;
  token_type: string;
 
}

export interface UserState {
  session: Session | null;
  loading: boolean;
  error: any;
}

export const initialUserState: UserState = {
  session: null,
  loading: false,
  error: null
};
