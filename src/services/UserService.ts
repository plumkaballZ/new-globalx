import { ISignUpFromData } from '../components/Authentication/SignUp/SignUp';
import { LocalUser } from '../models/LocalUser';
import { User } from '../models/User';
import { apiEndpoint } from './../settings/ApiEndpoints';
import { httpRequestService } from './HttpRequestService';
import { orderService } from './OrderService';

class UserService {
    private apiUrl = `${apiEndpoint}/api/user`;

    public loginUser = async (email: string, pw: string) => {

        let res = await httpRequestService.get<any>(`${this.apiUrl}/${email}/${pw}`);

        if (res.resString === "ok") {
            return {
                resString: "ok",
                email,
                password: pw,
                user: res.user
            };
        }
        else {
            return res;
        }
    }

    public signUpUser = async (signUpUserData: ISignUpFromData) => {

        const res = await httpRequestService
            .post(`${this.apiUrl}`, {
                phone: signUpUserData.phone,
                email: signUpUserData.email,
                password: signUpUserData.password,
                ip: LocalUser.getIp(),
                newsletter: signUpUserData.newsLetter
            });


        return res;


    }
    tryLoginForLocalUser = async (serverIsBusy: boolean, setServerIsBusy: any, setUser: any, setUserOrders: any) => {
        let email = LocalUser.getEmail();
        let pw = LocalUser.getPw();

        if (email && pw && !serverIsBusy) {
            setServerIsBusy(true);
            let res = await userService.loginUser(email, pw);

            if (res != null && res.resString === "ok") {
                let user = res.user as User;
                setUser(user);

                if (user.lvl === 99) {
                    await orderService.fetchAllOrders99(setUserOrders);
                }
                else {
                    await orderService.fetchAllOrders(user.email, user.uid, setUserOrders);
                }

            }

            setServerIsBusy(false);
        }
    }
}

export const userService = new UserService();