import axios from "@/api/axios";
import { USER_API } from "@/api/enpoints";


//auth related functions
export const login = async (email: string, password: string) => {
  const res = await axios.post(USER_API.LOGIN, { email, password });
  localStorage.setItem("token", res.data.token);
  return res.data;
};

export const register = async (email: string, password: string, name: string) => { 
  const res = await axios.post(USER_API.REGISTER, { email, password, name });
  localStorage.setItem("token", res.data.token);
  return res.data;
}
