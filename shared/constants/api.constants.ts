import { environment } from "@/enviroment/environment.prod";

const apiUrl = environment.apiUrl;
export class ApiConstant {
    
  public static Login = apiUrl.concat('auth/login');
  //get user
  public static getallUser = apiUrl.concat('user');
}