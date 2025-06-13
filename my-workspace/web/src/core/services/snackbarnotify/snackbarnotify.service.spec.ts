import { TestBed } from '@angular/core/testing';

import { SnackbarnotifyService } from './snackbarnotify.service';

describe('SnackbarnotifyService', () => {
  let service: SnackbarnotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackbarnotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
