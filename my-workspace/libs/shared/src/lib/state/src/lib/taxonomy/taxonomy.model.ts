

export const TAXONOMY_FEATURE_KEY = 'taxonomy';

export interface Taxonomy{
    id: string;
    parentid: string | null;
    taxonomytype: string;
    name: string;
    label: string;
    description: string;
    locale: string;
    isactive: boolean;
    created_at: Date;
    updated_at: Date;
    code: string;

}

export interface TaxonomyState {
    value: Taxonomy[];
    loading: boolean;
    error: any;
}

export const initialTaxonomyState: TaxonomyState = {
  value: [],
  loading: false,
  error: null,
};


export interface TaxonomyDialogData {
  locale:  string;
  data?: Taxonomy | null;
  
}