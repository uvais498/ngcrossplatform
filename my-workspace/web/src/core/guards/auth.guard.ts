// core/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, take } from 'rxjs';
import { selectIsAuthenticated } from '@my-workspace/shared';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    
  isAuthenticated$!: Observable<boolean>;
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsAuthenticated).pipe(
      take(1),
      map((isAuth) => {
        if (!isAuth) {
          this.router.navigate(['/register']); // redirect to login if not authenticated
          return false;
        }
        return true; // allow route
      })
    );
  }
}
