import { Injectable } from '@angular/core';
import { SupabaseclientService } from './supabaseclient.service';
import { Taxonomy } from '../state/src/lib/taxonomy/taxonomy.model';
@Injectable({
  providedIn: 'root'
})
export class TaxonomyService {

  constructor(private s: SupabaseclientService) { }
  async getTaxonmy(): Promise<any[]>{
    const { data ,  error } = await this.s.supabase
  .from('taxonomy')
  .select('*');
    console.log(data)
    if (error) throw error;
  return data;
  }
}
