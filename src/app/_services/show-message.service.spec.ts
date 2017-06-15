import { TestBed, inject } from '@angular/core/testing';

import { ShowMessageService } from './show-message.service';

describe('ShowMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowMessageService]
    });
  });

  it('should be created', inject([ShowMessageService], (service: ShowMessageService) => {
    expect(service).toBeTruthy();
  }));
});
