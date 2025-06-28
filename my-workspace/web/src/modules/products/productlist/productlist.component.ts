import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from "../../../components/common/input/input.component";
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownComponent } from "../../../components/common/dropdown/dropdown.component";

@Component({
  selector: 'app-productlist',
  imports: [CommonModule, InputComponent, FormsModule, ReactiveFormsModule, DropdownComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css',
})
export class ProductlistComponent {

  form;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      country : ['', [Validators.required]],
      email: new FormControl('', [Validators.required, Validators.email])
    });

    this.form.controls.country.setValue('AE')
  }

  onEmailChange(val: string) {
    console.log('Email changed to:', val);
  }
  onCountryChange(event : any){
    console.log(event)
  }

  countries = [
  { name: 'Saudi Arabia', code: 'SA' },
  { name: 'UAE', code: 'AE' },
  { name: 'India', code: 'IN' }
];
selectedCountry = '';

}
