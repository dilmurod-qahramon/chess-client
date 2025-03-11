export interface GameHistoryDto {
  sessionId: string;
  whitePlayer: string;
  blackPlayer: string;
  startedAt: Date;
  completedAt: Date | null;
}
