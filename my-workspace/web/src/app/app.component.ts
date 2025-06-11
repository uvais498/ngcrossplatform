import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated } from '@my-workspace/shared';
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
  constructor(
    private s: SupabaseclientService,
    
    private store: Store
  ) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    console.log(this.isAuthenticated$);
   //this.login();
  }

  async login() {
    this.store.dispatch(UserActions.login({
    email: 'muhammed.uvais@outlook.com',
    password: 'Najmu@2122'
  }));


  }

}
