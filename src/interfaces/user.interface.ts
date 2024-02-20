export interface User {
  id: string;
  name: string;
  password: string;
  role: string;
  isActive: boolean;
  email: string;
  emailVerified?: Date | null;
  image?: string | null;
}
