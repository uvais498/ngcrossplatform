import { Component,Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectEnumValues } from '@my-workspace/shared';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-localeselector',
  imports: [CommonModule,MatSelectModule,MatFormFieldModule],
  templateUrl: './localeselector.component.html',
  styleUrl: './localeselector.component.css',
})
export class LocaleselectorComponent {
  
  @Input() selectedLocale = 'EN';
  @Output() localeChanged = new EventEmitter<string>();
  localeValues$!:Observable<string[]>;
  constructor( private store: Store){
      this.localeValues$ = this.store.select(selectEnumValues('localecodes'));
  } 
  onLocaleChange(locale: string) {
    this.localeChanged.emit(locale);
  }
}
