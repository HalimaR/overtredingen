import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultaantalComponent } from './resultaantal.component';

describe('ResultaantalComponent', () => {
  let component: ResultaantalComponent;
  let fixture: ComponentFixture<ResultaantalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultaantalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultaantalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
