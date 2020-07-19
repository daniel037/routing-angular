import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevistasComponent } from './revistas.component';

describe('RevistasComponent', () => {
  let component: RevistasComponent;
  let fixture: ComponentFixture<RevistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
