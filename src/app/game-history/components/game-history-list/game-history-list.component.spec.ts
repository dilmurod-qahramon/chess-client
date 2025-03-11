import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHistoryListComponent } from './game-history-list.component';

describe('GameHistoryListComponent', () => {
  let component: GameHistoryListComponent;
  let fixture: ComponentFixture<GameHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameHistoryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
