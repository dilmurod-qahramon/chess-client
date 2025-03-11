import { Component, Input } from '@angular/core';
import { SessionService } from '../../../lobby/services/session.service';

@Component({
  selector: 'app-actions',
  standalone: false,
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss',
})
export class ActionsComponent {
  @Input({ required: true }) sessionId?: string;
  @Input({ required: true }) completedAt?: Date | null;
  constructor(private sessionService: SessionService) {}

  finishSession(sessionId: string) {
    this.sessionService.finishSession(sessionId).subscribe((res) => {
      alert('session is finished! ' + res);
    });
  }

  deleteSession(sessionId: string) {
    console.log(sessionId);
    this.sessionService.deleteSession(sessionId).subscribe((res) => {
      console.log(res);
      alert('session is deleted successfully!!');
    });
  }
}
