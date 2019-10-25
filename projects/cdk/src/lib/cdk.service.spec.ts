import { TestBed } from '@angular/core/testing';

import { CdkService } from './cdk.service';

describe('CdkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CdkService = TestBed.get(CdkService);
    expect(service).toBeTruthy();
  });
});
