import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultopnameplaatsComponent } from './resultopnameplaats.component';

describe('ResultopnameplaatsComponent', () => {
  let component: ResultopnameplaatsComponent;
  let fixture: ComponentFixture<ResultopnameplaatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultopnameplaatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultopnameplaatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
