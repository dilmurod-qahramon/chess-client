import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ChessBoardComponent } from './chess-board.component';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../services/session.service';

describe('ChessBoardComponent', () => {
  let component: ChessBoardComponent;
  let fixture: ComponentFixture<ChessBoardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ChessBoardComponent],
      providers: [ActivatedRoute, SessionService],
    });

    fixture = TestBed.createComponent(ChessBoardComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
