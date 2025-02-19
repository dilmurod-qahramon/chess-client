import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  @Input({ required: true }) currentTurn?: 'left' | 'right';
  @Output() submitForm = new EventEmitter<{ from: string; to: string }>();
  constructor(private activatedRoute: ActivatedRoute) {}

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
  }

  stopGame() {
    //set completedAt in session table to true.....
  }
}
