import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountrydropdownComponent } from './countrydropdown.component';

describe('CountrydropdownComponent', () => {
  let component: CountrydropdownComponent;
  let fixture: ComponentFixture<CountrydropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountrydropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountrydropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
