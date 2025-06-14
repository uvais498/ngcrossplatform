export const ENUM_FEATURE_KEY = 'enum';

export interface EnumState {
  [enumName: string]: {
    values: string[];
    loading: boolean;
    error: any;
  };
}

export const initialState: EnumState = {};