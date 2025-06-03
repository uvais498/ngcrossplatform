import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
@Component({
  selector: 'app-header',
  imports: [CommonModule,MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() toggle = new EventEmitter<void>();
  @Input() drawerOpened = true;

  onToggleClick() {
    this.toggle.emit();
  }
}
