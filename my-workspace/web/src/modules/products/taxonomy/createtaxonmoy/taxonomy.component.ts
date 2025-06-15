import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Taxonomy } from '@my-workspace/shared';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }      from '@angular/material/input';
import { MatButtonModule }     from '@angular/material/button';
import { MatCheckboxModule }   from '@angular/material/checkbox';
import { MatTableModule }      from '@angular/material/table';
import { MatIconModule }       from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-taxonomy',
  imports: [CommonModule, MatFormFieldModule,FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule],
  templateUrl: './taxonomy.component.html',
  styleUrl: './taxonomy.component.css',
})
export class TaxonomyComponent {
taxonomyForm: FormGroup;
  taxonomies: Taxonomy[] = [];
  editingId: string | null = null;
  loading = false;

  constructor(private fb: FormBuilder){
    this.taxonomyForm = this.fb.group({
      name: ['', Validators.required],
      label: [''],
      description: [''],
      taxonomytype: ['', Validators.required],
      locale: ['en'],
      isactive: [true],
      code: [''],
      parentid: [null],
    });
  }
  onSubmit(){
    console.log()
  }

  cancelEdit(){
     console.log()
  }

  edit(element: any){
     console.log()
  }
  delete(element: any){
    console.log()
  }
}

