import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardHeaderComponent } from './board-header.component';

describe('BoardHeaderComponent', () => {
  let component: BoardHeaderComponent;
  let fixture: ComponentFixture<BoardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoardHeaderComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create BoardHeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render players username', () => {
    component.leftPlayer = 'player1';
    component.rightPlayer = 'player2';
    fixture.detectChanges();
    const h1Element = fixture.nativeElement.querySelector('h1');
    expect(h1Element.textContent).toEqual('player1 VS player2');
  });

  it('should display default player usernames', () => {
    const h1Element = fixture.nativeElement.querySelector('h1');
    expect(h1Element.textContent).toEqual('player1 VS player2');
  });
});
