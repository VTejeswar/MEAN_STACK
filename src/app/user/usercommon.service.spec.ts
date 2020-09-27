import { TestBed } from '@angular/core/testing';

import { UsercommonService } from './usercommon.service';

describe('UsercommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsercommonService = TestBed.get(UsercommonService);
    expect(service).toBeTruthy();
  });
});
