import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaxonomylayoutComponent } from './taxonomylayout.component';

describe('TaxonomylayoutComponent', () => {
  let component: TaxonomylayoutComponent;
  let fixture: ComponentFixture<TaxonomylayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxonomylayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaxonomylayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
