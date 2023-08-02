import { TestBed } from '@angular/core/testing';

import { TaskDatesService } from './task-dates.service';

describe('TaskDatesService', () => {
  let service: TaskDatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskDatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
