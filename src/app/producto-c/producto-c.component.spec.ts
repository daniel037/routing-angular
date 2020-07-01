import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCComponent } from './producto-c.component';

describe('ProductoCComponent', () => {
  let component: ProductoCComponent;
  let fixture: ComponentFixture<ProductoCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
