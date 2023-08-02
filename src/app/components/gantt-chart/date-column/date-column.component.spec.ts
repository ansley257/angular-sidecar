import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateColumnComponent } from './date-column.component';

describe('DateColumnComponent', () => {
  let component: DateColumnComponent;
  let fixture: ComponentFixture<DateColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateColumnComponent]
    });
    fixture = TestBed.createComponent(DateColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
