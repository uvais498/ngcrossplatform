import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Taxonomy } from '@my-workspace/shared';
import { ComponentdialogComponent } from '../../../../components/common/componentdialog/componentdialog.component';
import { TaxonomyComponent } from '../createtaxonmoy/taxonomy.component';

@Component({
  selector: 'app-taxonomylayout',
  imports: [CommonModule,MatDialogModule],
  templateUrl: './taxonomylayout.component.html',
  styleUrl: './taxonomylayout.component.css',
})
export class TaxonomylayoutComponent {
private dialog = inject(MatDialog);

  openTaxonomyDialog(taxonomy?: Taxonomy) {
  this.dialog.open(ComponentdialogComponent, {
    // width: '800px',
    // height: '80%',
    data: {
      component: TaxonomyComponent,
      inputs: { data: taxonomy },
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
}
