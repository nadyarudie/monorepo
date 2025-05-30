import { User } from '@my-monorepo/types';

export function formatUserName(user: User): string {
  return `${user.name} (${user.email})`;
}

export function generateRandomId(): string {
  return Math.random().toString(36).substring(2, 9);
}
