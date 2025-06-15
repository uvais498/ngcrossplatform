import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentdialogComponent } from './componentdialog.component';

describe('ComponentdialogComponent', () => {
  let component: ComponentdialogComponent;
  let fixture: ComponentFixture<ComponentdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentdialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
