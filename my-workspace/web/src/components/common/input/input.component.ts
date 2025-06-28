import { Component, computed, effect, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  LabelName = input<string | undefined>(undefined);
  Placeholder = input<string>("");
  Type = input<'text' | 'password' | 'email'>('text');
  FormControl = input<FormControl | null>(null);
  ValueChange = output<string>();
  CustomErrorMessage = input<string | null>(null);

  ErrorMessage = computed(() => {

    if (this.CustomErrorMessage()) {
    return this.CustomErrorMessage();
  }

    const control = this.FormControl();
    if (!control || !control.touched || control.valid) return null;

    // const errors = control.errors;
    // if (!errors) return null;

    // if (errors['required']) return 'Required.';
    // if (errors['minlength']) return `Minimum length is ${errors['minlength'].requiredLength}.`;
    // if (errors['maxlength']) return `Maximum length is ${errors['maxlength'].requiredLength}.`;
    // if (errors['email']) return 'Invalid email format.';
    return 'Invalid field.';


  });

  constructor(){
    effect(() => {
      const ctrl = this.FormControl();
      if (ctrl) {
        const sub = ctrl.valueChanges.subscribe(value => this.ValueChange.emit(value));
        return () => sub.unsubscribe();
      }
      return;
    });
  }
  
}
