import { v4 as uuidv4 } from 'uuid';

export function generateUsername(): string {
  const uuid = uuidv4();
  const shortId = uuid.split('-')[0];
  return `user_${shortId}`;
}
