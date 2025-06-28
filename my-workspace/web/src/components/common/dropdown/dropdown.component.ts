import { Component, computed, effect, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-dropdown',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatSelectModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent<T> {
  
  LabelName = input<string | undefined>(undefined);
  Placeholder = input<string>('Select...');
  Options = input<T[]>([]);
  LabelKey = input<keyof T>('label' as keyof T);
  ValueKey = input<keyof T>('value' as keyof T);
  Type = input<'single' | 'multiple'>('single');
  FormControl = input<FormControl | null>(null);
  CustomErrorMessage = input<string | null>(null);
  Disabled = input<boolean>(false);

  ValueChange = output<any>();

  ErrorMessage = computed(() => {
    const control = this.FormControl();
    if (!control || !control.touched || control.valid) return null;

    if (this.CustomErrorMessage()) {
      return this.CustomErrorMessage();
    }

    return 'Invalid selection.';
  });

  constructor() {
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
