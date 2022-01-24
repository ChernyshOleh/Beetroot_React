export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
