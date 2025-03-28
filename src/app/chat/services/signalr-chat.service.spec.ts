import { TestBed } from '@angular/core/testing';

import { SignalRChatService } from './signalr-chat.service';

describe('ChatService', () => {
  let service: SignalRChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalRChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
