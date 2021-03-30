import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmembreComponent } from './addmembre.component';

describe('AddmembreComponent', () => {
  let component: AddmembreComponent;
  let fixture: ComponentFixture<AddmembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmembreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
