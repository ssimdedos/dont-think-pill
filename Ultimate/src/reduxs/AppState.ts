export type User = {
  name: string
  email: string
  password: string
  gender: 'male' | 'female' | 'none'
  age: number
  height: number
  weight: Number
};

export type AppState = {
  loggedIn: boolean
  loggedUser: User
};
