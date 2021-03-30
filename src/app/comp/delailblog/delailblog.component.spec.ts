import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelailblogComponent } from './delailblog.component';

describe('DelailblogComponent', () => {
  let component: DelailblogComponent;
  let fixture: ComponentFixture<DelailblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelailblogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelailblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
