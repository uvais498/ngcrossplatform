import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-confirmdialog',
  imports: [CommonModule, MatDialogModule,MatProgressSpinnerModule,MatButtonModule],
  standalone: true,
  templateUrl: './confirmdialog.component.html',
  styleUrl: './confirmdialog.component.css',
})

export class ConfirmdialogComponent {
  loading = false;
  constructor(
    private dialogRef: MatDialogRef<ConfirmdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData
  ) {}

  onConfirm(): void {
    if (this.data.disableCloseDuringAsync) {
      this.loading = true;
      setInterval(() => {
         this.dialogRef.close(true)
      }
      ,1100)
    }
    else{
      this.dialogRef.close(true)
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

}




export interface ConfirmDialogData {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  disableCloseDuringAsync?: boolean;
}


