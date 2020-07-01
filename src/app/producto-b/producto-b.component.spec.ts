import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoBComponent } from './producto-b.component';

describe('ProductoBComponent', () => {
  let component: ProductoBComponent;
  let fixture: ComponentFixture<ProductoBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
