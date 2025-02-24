import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeftPanelComponent } from './left-panel.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BoardHeaderComponent } from '../board-header/board-header.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { DialogModule } from 'primeng/dialog';
import { SessionService } from '../../services/session.service';
import { SideToColorPipe } from '../../pipes/side-to-color.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('LeftPanelComponent', () => {
  let component: LeftPanelComponent;
  let fixture: ComponentFixture<LeftPanelComponent>;
  let activatedRouteMock: jasmine.SpyObj<ActivatedRoute>;
  let mockSessionService: Partial<SessionService>;
  const httpClientMock = {
    get: jasmine.createSpy().and.returnValue(of({})),
    post: jasmine.createSpy().and.returnValue(of({})),
    patch: jasmine.createSpy().and.returnValue(of({})),
    put: jasmine.createSpy().and.returnValue(of({})),
  };

  beforeEach(async () => {
    activatedRouteMock = jasmine.createSpyObj('ActivatedRoute', [
      'queryParams',
    ]);
    activatedRouteMock.queryParams = of({ id: 'some-id' });
    mockSessionService = jasmine.createSpyObj('SessionService', [
      'finishSession',
    ]);
    await TestBed.configureTestingModule({
      declarations: [LeftPanelComponent, BoardHeaderComponent, SideToColorPipe],
      imports: [
        FormsModule,
        ButtonModule,
        InputTextModule,
        RouterModule,
        DialogModule,
      ],
      providers: [
        { provide: HttpClient, useValue: httpClientMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: SessionService, useValue: mockSessionService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LeftPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.sessionId).toBe('some-id');
  });

  it('should display correct turn in heading', () => {
    component.currentTurn = 'left';
    fixture.detectChanges();
    const h2Element = fixture.debugElement.query(By.css('#move-turn-h2'));
    expect(h2Element.nativeElement.textContent).toContain('Move Turn - WHITE');
  });

  it('should show an alert on invalid move input', () => {
    spyOn(window, 'alert');

    component.moveFrom = 'z9';
    component.moveTo = 'a5';
    component.onSubmit();

    expect(window.alert).toHaveBeenCalledWith('Please, enter a valid move!!');
  });

  it('should emit an event on valid move', () => {
    spyOn(component.submitForm, 'emit');
    component.moveFrom = 'a2';
    component.moveTo = 'a4';
    component.onSubmit();

    expect(component.submitForm.emit).toHaveBeenCalledWith({
      from: 'a2',
      to: 'a4',
    });
  });

  it('should navigate to /chess when "Leave the game" button is clicked', () => {
    const leaveButton = fixture.debugElement.query(By.css('#leave-game-btn'));
    expect(leaveButton.nativeElement.textContent).toContain('Leave the game');
  });
});
