export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
}
