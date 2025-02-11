export interface GameSession {
  id: string;
  leftPlayerId: string;
  rightPlayerId: string;
  nextTurnForPlayer: 'left' | 'right';
}
