import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import devconfig from '../appconfigs/dev.config.json';

@Injectable({
  providedIn: 'root'
})


export class SupabaseclientService {

   private client!: SupabaseClient;
   constructor() {
    this.client = createClient(
      devconfig.supabaseUrl, 
      devconfig.supabaseKey
    );
  }

   get supabase(): SupabaseClient {
    return this.client;
  }
}
