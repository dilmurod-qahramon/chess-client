import { Message } from './message.interface';

export interface Chat {
  id: string;
  name: string;
  createdAt: Date;
  profileImage: string;
  messages: Message[];
}
