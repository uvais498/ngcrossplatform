import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocaleselectorComponent } from './localeselector.component';

describe('LocaleselectorComponent', () => {
  let component: LocaleselectorComponent;
  let fixture: ComponentFixture<LocaleselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocaleselectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LocaleselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
