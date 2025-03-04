import { GameActor } from '../../core/types/game-actor.type';
import { IconPathPipe } from './icon-path.pipe';

describe('IconPathPipePipe', () => {
  const pipe = new IconPathPipe();
  const gameActor: GameActor = { team: 'black', type: 1 };
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return correct path', () => {
    expect(pipe.transform(gameActor)).toEqual(
      '/chess-icons/' + gameActor.team + '-' + gameActor.type + '.svg'
    );
  });
});
