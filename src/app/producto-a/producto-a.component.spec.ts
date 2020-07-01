import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoAComponent } from './producto-a.component';

describe('ProductoAComponent', () => {
  let component: ProductoAComponent;
  let fixture: ComponentFixture<ProductoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
