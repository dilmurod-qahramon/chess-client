import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartMenuComponent } from './start-menu.component';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { SessionService } from '../../services/session.service';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { of } from 'rxjs';
import { PlayerDto } from '../../dto/player.dto';

describe('StartMenuComponent', () => {
  let component: StartMenuComponent;
  let fixture: ComponentFixture<StartMenuComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let playerServiceMock: jasmine.SpyObj<PlayerService>;
  let sessionServiceMock: jasmine.SpyObj<SessionService>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    playerServiceMock = jasmine.createSpyObj('PlayerService', ['createPlayer']);
    sessionServiceMock = jasmine.createSpyObj('SessionService', [
      'initSession',
    ]);

    await TestBed.configureTestingModule({
      declarations: [StartMenuComponent],
      imports: [FormsModule, ButtonModule, InputTextModule],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: PlayerService, useValue: playerServiceMock },
        {
          provide: SessionService,
          useValue: sessionServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StartMenuComponent);
    component = fixture.componentInstance;
    component.leftPlayer = 'username1';
    component.rightPlayer = 'username2';
    fixture.detectChanges();
  });

  it('should create StartMenuComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render labels and input fields correctly', () => {
    const h1Element = fixture.nativeElement.querySelector('h1');
    const username1LabelElement = fixture.nativeElement.querySelector(
      'label[for="username1"]'
    );
    const username2LabelElement = fixture.nativeElement.querySelector(
      'label[for="username2"]'
    );

    expect(h1Element.textContent).toBe('GAME OVER');
    expect(username1LabelElement.textContent).toBe('Player 1');
    expect(username2LabelElement.textContent).toBe('Player 2');
  });

  it('should call startGame() when "Start Game" button is clicked', () => {
    spyOn(component, 'startGame');
    const gameStartBtn = fixture.debugElement.query(By.css('p-button button'));
    gameStartBtn.triggerEventHandler('click', null);
    expect(component.startGame).toHaveBeenCalled();
  });

  it('should navigate to "/chess/board" when game starts', () => {
    const mockPlayer1: PlayerDto = { id: undefined, username: 'player1' };
    const mockPlayer2: PlayerDto = { id: undefined, username: 'player2' };
    const mockSessionId = '32a3e2a3-b4c3-4743-960a-36a2c8246563';

    playerServiceMock.createPlayer.and.returnValues(
      of(mockPlayer1),
      of(mockPlayer2)
    );
    sessionServiceMock.initSession.and.returnValue(of(mockSessionId));
    component.startGame();
    fixture.detectChanges();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['chess/board'], {
      queryParams: { id: mockSessionId },
    });
  });

  it('should display an error message if errorMessage is set', () => {
    component.errorMesage = 'Error: Missing players';
    fixture.detectChanges();

    const errorElement = fixture.nativeElement.querySelector('h2');
    expect(errorElement).toBeTruthy();
    expect(errorElement.textContent).toBe(' Error: Missing players ');
  });
});
