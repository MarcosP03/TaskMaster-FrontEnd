import api from "@/lib/axios";
import { UserLoginForm } from "@/types";
import { isAxiosError } from "axios";


export async function authenticateUser(formData: UserLoginForm) {
  try {
    const url = "/auth/login";
    const { data } = await api.post(url, formData);
    localStorage.setItem("AUTH_TOKEN", data.token);
    return data;
  } catch (error) {
    if(isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
  }
}