import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedetailsComponent } from './moviedetails.component';

describe('MoviedetailsComponent', () => {
  let component: MoviedetailsComponent;
  let fixture: ComponentFixture<MoviedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
