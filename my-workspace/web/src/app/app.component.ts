import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { EnumActions, selectEnumValues, selectIsAuthenticated } from '@my-workspace/shared';
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
  constructor(
    private s: SupabaseclientService,
    
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(EnumActions.loadEnum({ enumName: 'taxonomytype' }));
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    this.enumValues$ = this.store.select(selectEnumValues('taxonomytype'));
    console.log(this.enumValues$.subscribe(d => d && console.log(d)));
   
  }



}
