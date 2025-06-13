
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class SnackbarnotifyService {

  constructor(private snackBar: MatSnackBar) { }
  private show(
    message: string, 
    panelClass: string[], 
    duration = 3000, 
    position: MatSnackBarConfig['horizontalPosition'] = 'right',
    vertical: MatSnackBarConfig['verticalPosition'] = 'top'
  ) {
    this.snackBar.open(message, 'Close', {
      duration,
      panelClass,
      horizontalPosition: position,
      verticalPosition: vertical,
    });
    
    
  }

  success(msg: string, duration?: number) {
    this.show(msg, ['snackbar-success'], duration);
  }

  error(msg: string, duration?: number) {
    this.show(msg, ['snackbar-error'], duration);
  }

  info(msg: string, duration?: number) {
    this.show(msg, ['snackbar-info'], duration);
  }

  warn(msg: string, duration?: number) {
    this.show(msg, ['snackbar-warn'], duration);
  }
}
