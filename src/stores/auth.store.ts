
import { writable } from 'svelte/store';
import { AuthApi, AuthType, UserApi } from 'src/client/api';
import type { LoginForm } from '../common/interfaces/auth';
import { authenticate, logout } from '../services/auth.service';
import { browser } from "$app/env";


// if (browser) {
//     import web3 from 'web3';
// }

declare let window: any;



class AuthStore {

    constructor(
        public authUser = writable([]),
        private authApi = new AuthApi(),
        private userApi = new UserApi()
    ) { }

    async login(loginForm: LoginForm): Promise<void> {

        const payload = {
            username: loginForm.username,
            password: loginForm.password,
            authType: AuthType.STANDARD
        }

        this.authApi = new AuthApi();
        const result = await this.authApi.auth(payload);
        this.authUser.set([result.data?.payload?.user]);
        authenticate(result.data?.payload);
    }

    async loginMetaMask() {

        console.log('loginMetaMask');
        if (this.ethEnabled()) {
            // get public key

            // window.ethereum.personal.sign(window.ethereum.fromUtf8("Hello from Toptal!"), window.ethereum.eth.coinbase, console.log);
        }
        

        // this.userApi.createUser           
    }

    ethEnabled = async () => {
    
        if (window.ethereum) {
            await window.ethereum.send('eth_requestAccounts');
            // window.web3 = new web3(window.ethereum);
            return true;
        }
        return false;
    }

    async logout(): Promise<void> {
        this.authUser.set([]);
        logout();
    }
}

export const authStore = new AuthStore();