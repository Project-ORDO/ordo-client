export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse { 
  name: string;
  email: string;
}


export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}
