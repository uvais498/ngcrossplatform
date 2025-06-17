import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { selectEnumValues, Taxonomy, TaxonomyDialogData } from '@my-workspace/shared';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }      from '@angular/material/input';
import { MatButtonModule }     from '@angular/material/button';
import { MatCheckboxModule }   from '@angular/material/checkbox';
import { MatTableModule }      from '@angular/material/table';
import { MatIconModule }       from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from '../../../../components/common/button/button.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-taxonomy',
  imports: [CommonModule, MatFormFieldModule,FormsModule,ButtonComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatProgressSpinnerModule],
  templateUrl: './taxonomy.component.html',
  styleUrl: './taxonomy.component.css',
})
export class TaxonomyComponent implements OnInit {
   @Input() data?: TaxonomyDialogData;
   @Output() submitForm = new EventEmitter<Taxonomy>();
  @Output() cancel = new EventEmitter<void>();


  enumValues$!:Observable<string[]>;
  taxonomyForm: FormGroup;
  taxonomies: Taxonomy[] = [];
  editingId: string | null = null;
  loading = false;

  constructor(private fb: FormBuilder,
  private store: Store
  ){
    this.enumValues$ = this.store.select(selectEnumValues('taxonomytype'));
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

  ngOnInit() {
   
    if (this.data?.data) {
      this.taxonomyForm.patchValue(this.data.data);
    }
  }
  onSubmit(){
   if (this.taxonomyForm.valid) {
      this.submitForm.emit(this.taxonomyForm.value);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}

