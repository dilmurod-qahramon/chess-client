import { Pipe, PipeTransform } from '@angular/core';
import { GameActor } from '../../core/types/game-actor.type';

@Pipe({
  name: 'iconPathPipe',
  standalone: false,
})
export class IconPathPipe implements PipeTransform {
  transform(value: GameActor): unknown {
    return '/chess-icons/' + value.team + '-' + value.type + '.svg';
  }
}
