import { TestBed } from '@angular/core/testing';

import { NbdMessageService } from './nbd-messaging.service';

describe('NbdMessagingService', () => {
  let service: NbdMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbdMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
