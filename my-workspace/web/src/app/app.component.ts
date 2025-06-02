import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated } from '@my-workspace/shared';
import { UserActions, SupabaseclientService } from '@my-workspace/shared';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  imports: [NxWelcomeComponent, RouterModule,CommonModule],
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
    this.setCompanyTheme('arabianoud');
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    console.log(this.isAuthenticated$);
    this.login();
  }

  async login() {
    this.store.dispatch(UserActions.login({
    email: 'muhammed.uvais@outlook.com',
    password: 'Najmu@2122'
  }));


  }



setCompanyTheme(company: 'arabianoud' | 'oudelite' | 'rosewood') {
  const themes: { [key in 'arabianoud' | 'oudelite' | 'rosewood']: { primary: string } } = {
    arabianoud: {
      primary: '#873D1D',
    },
    oudelite: {
      primary: '#000000',
    },
    rosewood: {
      primary: '#8d8734',
    }
  };

  const theme = themes[company];

  if (theme) {
    document.documentElement.style.setProperty('--bs-primary', theme.primary);

    // Set --bs-primary-rgb (used in borders, shadows, etc.)
    const rgb = this.hexToRgb(theme.primary);
    document.documentElement.style.setProperty('--bs-primary-rgb', rgb);
  }
}

hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}


}
