import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassowrdComponent } from './passowrd.component';

describe('PassowrdComponent', () => {
  let component: PassowrdComponent;
  let fixture: ComponentFixture<PassowrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassowrdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassowrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
