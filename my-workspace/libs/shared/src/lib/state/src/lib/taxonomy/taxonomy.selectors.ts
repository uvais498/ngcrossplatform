import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaxonomyState, Taxonomy } from './taxonomy.model';
import { TAXONOMY_FEATURE_KEY } from './taxonomy.model';

export const selectTaxonomyState = createFeatureSelector<TaxonomyState>(TAXONOMY_FEATURE_KEY);

export const selectTaxonomyItems = createSelector(
  selectTaxonomyState,
  (state: TaxonomyState) => state.value
);

// Nested tree selector
export interface TaxonomyNode {
  id: string;
  name: string;
  children?: TaxonomyNode[];
}

export const selectTaxonomyTree = createSelector(
  selectTaxonomyItems,
  (items: Taxonomy[]): TaxonomyNode[] => {
    const map = new Map<string, TaxonomyNode>();
    items.forEach(item => {
      map.set(item.id, { id: item.id, name: item.name, children: [] });
    });

    const tree: TaxonomyNode[] = [];

    items.forEach(item => {
      const node = map.get(item.id)!;
      if (item.parentid) {
        const parent = map.get(item.parentid);
        if (parent) parent.children!.push(node);
      } else if (item.taxonomytype === 'MAIN') {
        tree.push(node);
      }
    });

    return tree;
  }
);
