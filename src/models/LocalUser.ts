export class LocalUser {
    static getIp(): string {
        let userIp = localStorage.getItem('userIp') as string;

        if (userIp === null) {
            userIp = this.generateNewUserIp();
            localStorage.setItem('userIp', userIp);
        }

        return userIp;
    }

    static logOff() {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userPw");
    }

    static setEmail(email: string) {
        localStorage.setItem('userEmail', email);
    }
    static setPw(userPw: string) {
        localStorage.setItem('userPw', userPw);
    }
    static setIp(userIp: string) {
        localStorage.setItem('userIp', userIp);
    }

    static getEmail(): string {
        let userEmail = localStorage.getItem('userEmail') as string;
        return userEmail;
    }

    static getPw(): string {
        let userPw = localStorage.getItem('userPw') as string;
        return userPw;
    }
    static generateNewUserIp() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
