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

        if (res.resString === "not found") {
            alert("user not found");
            return;
        }
        if (res.resString === "wrong password") {
            alert("wrong password :( please try again with a different");
            return;
        }
        if (res.resString === "ok") {

            // LocalUser.setEmail(email);
            // LocalUser.setPw(pw);

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

        if (res.resString === "user already exists") {
            alert("bruger findes allerede");
            return;
        }

        if (res.resString === "ok") {

            let user = res.user;

            LocalUser.setEmail(user.email)
            LocalUser.setPw(user.password);

            return res;
        }
    }
    tryLoginForLocalUser = async (serverIsBusy: boolean, setServerIsBusy: any, setUser: any, setUserOrders: any) => {
        let email = LocalUser.getEmail();
        let pw = LocalUser.getPw();

        if (email && pw && !serverIsBusy) {
            console.log('do server call');
            setServerIsBusy(true);
            let res = await userService.loginUser(email, pw);

            if (res.resString === "ok") {
                let user = res.user as User;

                if (user.lvl === 99) {
                    orderService.fetchAllOrders99(setUserOrders);
                }
                else {
                    orderService.fetchAllOrders(user.email, user.uid, setUserOrders);
                }

                setUser(user);
            }

            setServerIsBusy(false);
        }
    }
}

export const userService = new UserService();