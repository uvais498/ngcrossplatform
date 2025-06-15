import {
  Component,
  ComponentRef,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

interface DialogData {
  component: any;
  inputs?: { [key: string]: any };
  outputs?: { [key: string]: Function };
}

@Component({
  selector: 'app-componentdialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './componentdialog.component.html',
  styleUrls: ['./componentdialog.component.css'],
})
export class ComponentdialogComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef,static: true }) container!: ViewContainerRef;
  componentRef!: ComponentRef<any>;

  constructor(
    private dialogRef: MatDialogRef<ComponentdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    this.loadComponent();
  }

  private loadComponent() {
    //this.container.clear();

    this.componentRef = this.container.createComponent(this.data.component);

    if (this.data.inputs) {
      for (const [key, value] of Object.entries(this.data.inputs)) {
        this.componentRef.instance[key] = value;
      }
    }

    if (this.data.outputs) {
      for (const [key, handler] of Object.entries(this.data.outputs)) {
        if (this.componentRef.instance[key]?.subscribe) {
          this.componentRef.instance[key].subscribe(handler);
        }
      }
    }
  }
}
