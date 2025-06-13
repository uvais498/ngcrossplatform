import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmdialogComponent, ConfirmDialogData } 
from '../../components/common/confirmdialog/confirmdialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmdialogService {

  constructor(private dialog: MatDialog) {}
    confirmWithAsyncCallbacks(
    data: ConfirmDialogData,
    onConfirm: () => void | Promise<void>,
    onCancel?: () => void | Promise<void>
  ) {
    const dialogRef = this.dialog.open(ConfirmdialogComponent, {
      width: '400px',
      disableClose: !!data.disableCloseDuringAsync,
      data
    });
    dialogRef.afterClosed().subscribe(async (confirmed) => {
      if (confirmed) {
        try {
          await onConfirm?.();
        } finally {
          dialogRef.close();
        }
      } else {
        await onCancel?.();
      }
    });
  }
}
