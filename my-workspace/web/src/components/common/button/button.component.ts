import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() class: string | string[] = '';
  @Input() loading = false;
  @Input() disabled = false;
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() buttontype: 'submit' | 'button' = 'button';
  @Input() fullWidth = false;
  @Input() text = 'Submit';
  @Input() variant:
    | 'raised'
    | 'flat'
    | 'stroked'
    | 'basic'
    | 'icon'
    | 'fab'
    | 'mini-fab' = 'raised';

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (!this.loading) {
      this.clicked.emit();
    }
  }
  get variantDirective() {
    switch (this.variant) {
      case 'flat': return 'mat-flat-button';
      case 'stroked': return 'mat-stroked-button';
      case 'basic': return 'mat-button';
      case 'icon': return 'mat-icon-button';
      case 'fab': return 'mat-fab';
      case 'mini-fab': return 'mat-mini-fab';
      default: return 'mat-raised-button';
    }
  }
}
