import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugCategoryMenuComponent } from './drug-category-menu.component';

describe('DrugCategoryMenuComponent', () => {
  let component: DrugCategoryMenuComponent;
  let fixture: ComponentFixture<DrugCategoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugCategoryMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrugCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
