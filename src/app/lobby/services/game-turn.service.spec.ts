import { TestBed } from '@angular/core/testing';

import { GameTurnService } from './game-turn.service';

describe('GameTurnService', () => {
  let service: GameTurnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameTurnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
