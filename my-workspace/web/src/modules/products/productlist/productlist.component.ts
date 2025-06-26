import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from "../../../components/common/input.component";
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-productlist',
  imports: [CommonModule, InputComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css',
})
export class ProductlistComponent {

  form;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onEmailChange(val: string) {
    console.log('Email changed to:', val);
  }
}
