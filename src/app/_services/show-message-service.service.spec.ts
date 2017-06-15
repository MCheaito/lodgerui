import { TestBed, inject } from '@angular/core/testing';

import { ShowMessageServiceService } from './show-message-service.service';

describe('ShowMessageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowMessageServiceService]
    });
  });

  it('should be created', inject([ShowMessageServiceService], (service: ShowMessageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
