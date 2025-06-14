import { Injectable } from '@angular/core';
import { SupabaseclientService } from './supabaseclient.service';

@Injectable({
  providedIn: 'root'
})
export class EnumsService {

  constructor(private s :SupabaseclientService) {
   }

   async getEnums(enumName: string): Promise<string[]>{
    const { data , error } = await this.s.supabase
      .rpc('get_enum_values', { enum_name: enumName });
     if (error) {
      console.error('Supabase RPC Error:', error);
      throw error;
    }
    return data ?? [];
   }
}
