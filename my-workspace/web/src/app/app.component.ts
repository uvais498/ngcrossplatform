import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { EnumActions, EnumName, selectEnumValues,selectTaxonomyTree, selectIsAuthenticated, TaxonomyActions, TaxonomyService } from '@my-workspace/shared';
import { UserActions, SupabaseclientService } from '@my-workspace/shared';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  imports: [RouterModule,CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'web';
  isAuthenticated$!: Observable<boolean>;
  enumValues$!:Observable<string[]>;
  TValues$!:Observable<any[]>;
  constructor(
    private s: SupabaseclientService,
    private taxonomyService : TaxonomyService,
    
    private store: Store
  ) {}

  ngOnInit(): void {
    this.loadEnums();
    // this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    // this.enumValues$ = this.store.select(selectEnumValues('taxonomytype'));
     this.TValues$ = this.store.select(selectTaxonomyTree);
    // console.log(this.TValues$.subscribe(d => d && console.log(d)));
   
  }

  loadEnums(){
    this.taxonomyService.getTaxonmy().then(console.log).catch(console.error);
    this.store.dispatch(TaxonomyActions.loadTaxonomy());
    const enumsToLoad : EnumName[]  = ['taxonomytype', 'localecodes'] ;
    enumsToLoad.forEach(enumName => {
      this.store.dispatch(EnumActions.loadEnum({ enumName }));
    });
    


  }

}
