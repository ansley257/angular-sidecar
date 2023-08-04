import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateColumnHeaderComponent } from './date-column-header.component';

describe('DateColumnHeaderComponent', () => {
  let component: DateColumnHeaderComponent;
  let fixture: ComponentFixture<DateColumnHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateColumnHeaderComponent]
    });
    fixture = TestBed.createComponent(DateColumnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
