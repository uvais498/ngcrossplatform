import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { selectIsAuthenticated, UserActions } from '@my-workspace/shared';
import { SupabaseclientService } from '@my-workspace/shared';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { SnackbarnotifyService } from '../../../core/services/snackbarnotify/snackbarnotify.service';
@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isAuthenticated$!: Observable<boolean>;
  loginForm: FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private notifyService: SnackbarnotifyService,
    private router: Router,
    private store: Store
  ) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  onSubmit() {
    if (this.loginForm.valid) {
       this.store.dispatch(UserActions.login(this.loginForm.value));
      this.isAuthenticated$.subscribe(isAuth => isAuth && this.router.navigate(['/']));
       this.notifyLogin();
    }
  }

  notifyLogin(){
    
      this.notifyService.success("Logged In");
  }
}
