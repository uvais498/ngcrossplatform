import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaxonomyState, Taxonomy } from './taxonomy.model';
import { TAXONOMY_FEATURE_KEY } from './taxonomy.model';

export const selectTaxonomyState = createFeatureSelector<TaxonomyState>(TAXONOMY_FEATURE_KEY);

export const selectTaxonomyItems = createSelector(
  selectTaxonomyState,
  (state: TaxonomyState) => state.value
);

// Nested tree selector
export interface TaxonomyNode extends Taxonomy {
  
  children?: Taxonomy[];
}

export const selectTaxonomyTree = createSelector(
  selectTaxonomyItems,
  (items: Taxonomy[]): TaxonomyNode[] => {
    const map = new Map<string, TaxonomyNode>();

    // Step 1: Clone each taxonomy item as a node with an empty children array
    items.forEach(item => {
      map.set(item.id, { ...item, children: [] });
    });

    const tree: TaxonomyNode[] = [];

    // Step 2: Assign each node to its parent or as a root
    items.forEach(item => {
      const node = map.get(item.id)!;
      if (item.parentid && map.has(item.parentid)) {
        map.get(item.parentid)!.children!.push(node);
      } else if (item.taxonomytype === 'MAIN') {
        tree.push(node);
      }
    });

    return tree;
  }
);
