import { GameActorTypes } from './game-actor-types.enum';

export type GameActor = { team: 'white' | 'black'; type: GameActorTypes };
