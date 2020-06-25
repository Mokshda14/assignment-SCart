import { TestBed } from '@angular/core/testing';

import { NbdMessagingService } from './nbd-messaging.service';

describe('NbdMessagingService', () => {
  let service: NbdMessagingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbdMessagingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
