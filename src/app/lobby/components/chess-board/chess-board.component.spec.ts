import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessBoardComponent } from './chess-board.component';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../services/session.service';

describe('ChessBoardComponent', () => {
  let component: ChessBoardComponent;
  let fixture: ComponentFixture<ChessBoardComponent>;
  let activatedRouteMock: jasmine.SpyObj<ActivatedRoute>;
  let sessionServiceMock: jasmine.SpyObj<SessionService>;

  beforeEach(async () => {
    activatedRouteMock = jasmine.createSpyObj('ActivatedRoute', [
      'queryParams',
    ]);
    sessionServiceMock = jasmine.createSpyObj('SessionService', ['getSession']);
    await TestBed.configureTestingModule({
      declarations: [ChessBoardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChessBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
