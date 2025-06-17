import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Taxonomy,TaxonomyDialogData } from '@my-workspace/shared';
import { ComponentdialogComponent } from '../../../../components/common/componentdialog/componentdialog.component';
import { TaxonomyComponent } from '../createtaxonmoy/taxonomy.component';
import { LocaleselectorComponent } from '../../../../components/common/localeselector/localeselector.component';
import { ButtonComponent } from "../../../../components/common/button/button.component";


@Component({
  selector: 'app-taxonomylayout',
  imports: [CommonModule, MatDialogModule, LocaleselectorComponent, ButtonComponent],
  templateUrl: './taxonomylayout.component.html',
  styleUrl: './taxonomylayout.component.css',
})
export class TaxonomylayoutComponent {
  selectedLocale = 'EN';
  private dialog = inject(MatDialog);
  openTaxonomyDialog(taxonomy?: Taxonomy) {

  const dialogData : TaxonomyDialogData = {
    locale: this.selectedLocale,
    data : null
  };

  this.dialog.open(ComponentdialogComponent, {
    data: {
      component: TaxonomyComponent,
      inputs: { data: dialogData },
      outputs: {
        submitForm: async (value: Taxonomy) => {
          console.log(value)
          if (taxonomy) {
           // await this.service.update(taxonomy.id, value);
          } else {
          //   await this.service.add(value);
          }
          this.dialog.closeAll();
         // this.load();
        },
        cancel: () => this.dialog.closeAll()
      }
    }
  });
}
showLocaleSelector = true;

onLocaleChanged(locale: string) {
  console.log(locale)
}

}

