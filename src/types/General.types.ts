export interface ApiResponse<T> {
  data?: T;
  message: string;
  status: string;
  code: number;
  redirect?: string;
}