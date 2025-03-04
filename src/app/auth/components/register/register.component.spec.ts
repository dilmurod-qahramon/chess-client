import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { AuthService } from '../../services/auth.service';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let registerBtn: HTMLButtonElement;
  let loginBtn: HTMLButtonElement;
  let mockAuthService = jasmine.createSpyObj('AuthService', ['register']);
  let mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', [
    'RouterLink',
  ]);
  let mockRouter = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [FormsModule, ButtonModule, RouterModule],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    registerBtn = fixture.debugElement.query(
      By.css("p-button[label='Register']")
    )?.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the title and 2 buttons', () => {
    const title = fixture.nativeElement.querySelector('h1');

    expect(title.textContent).toEqual('Register');
    expect(registerBtn).toBeDefined();
    expect(registerBtn).toBeDefined();
  });

  it('should navigate to login', async () => {
    loginBtn = fixture.debugElement.query(
      By.css("p-button[label='Go to login']")
    )?.nativeElement;
    loginBtn.click;
    expect(mockRouter.navigate).toHaveBeenCalled();
  });
});
