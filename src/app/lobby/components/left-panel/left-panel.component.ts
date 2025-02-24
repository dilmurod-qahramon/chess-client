import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-left-panel',
  standalone: false,
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.scss',
})
export class LeftPanelComponent implements OnInit {
  moveFrom: string = '';
  moveTo: string = '';
  sessionId?: string;
  visible: boolean = false;
  @Input({ required: true }) currentTurn?: 'left' | 'right';
  @Output() submitForm = new EventEmitter<{ from: string; to: string }>();

  toggleDialog() {
    this.visible = !this.visible;
  }
  constructor(
    private sessionService: SessionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.sessionId = params['id'];
    });
  }

  onSubmit() {
    const moveRegex = /^[a-h][1-8]$/;
    if (!moveRegex.test(this.moveFrom) || !moveRegex.test(this.moveTo)) {
      alert('Please, enter a valid move!!');
      return;
    }
    this.submitForm.emit({ from: this.moveFrom, to: this.moveTo });
    this.moveFrom = '';
    this.moveTo = '';
  }

  stopGame() {
    this.sessionService.finishSession(this.sessionId!).subscribe((res) => {
      console.log(res);
      this.router.navigate(['chess']);
    });
  }
}
