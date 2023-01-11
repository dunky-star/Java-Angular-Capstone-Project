import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDrugListComponent } from './product-drug-list.component';

describe('ProductDrugListComponent', () => {
  let component: ProductDrugListComponent;
  let fixture: ComponentFixture<ProductDrugListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDrugListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDrugListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
