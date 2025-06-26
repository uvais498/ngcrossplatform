import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { Observable } from 'rxjs';
import { selectIsAuthenticated, selectLoading, UserActions } from '@my-workspace/shared';
import { SupabaseclientService } from '@my-workspace/shared';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { SnackbarnotifyService } from '../../../core/services/snackbarnotify/snackbarnotify.service';
import { InputComponent } from "../../../components/common/input.component";
@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatProgressSpinnerModule, InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isAuthenticated$!: Observable<boolean>;
  loading$!: Observable<boolean>;
  loginForm: FormGroup;
  loading=false;

  constructor(
    private fb: FormBuilder,
    private notifyService: SnackbarnotifyService,
    private router: Router,
    private store: Store
  ) {
    this.loading$ = this.store.select(selectLoading);
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

 getControl(name: string): FormControl {
  return this.loginForm.get(name) as FormControl;
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
