import { Pipe, PipeTransform } from '@angular/core';
import { GameActor } from '../../core/types/GameActor.model';

@Pipe({
  name: 'iconPathPipe',
  standalone: false,
})
export class IconPathPipe implements PipeTransform {
  transform(value: GameActor): unknown {
    return '/chess-icons/' + value.team + '-' + value.type + '.svg';
  }
}
