
import { writable } from 'svelte/store';
import { AuthApi, AuthType, UserApi } from 'src/client/api';
import type { LoginForm } from '../common/interfaces/auth';
import { authenticate, logout } from '../services/auth.service';
import { browser } from "$app/env";
import { web3 } from 'svelte-web3'

// import web3 from 'web3';


// if (browser) {
//     import web3 from 'web3';
// }

declare let window: any;



class AuthStore {

    private web3Service;

    constructor(
        public authUser = writable([]),
        private authApi = new AuthApi(),
        private userApi = new UserApi()
    ) {
        web3.subscribe(value => {
            this.web3Service = value;
          })
     }

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

    async metaMaskAuth(publicKey) {
        try {
            const result = await this.userApi.getOrCreateNonce({publicKey});
            const {payload} = result.data;
            console.log('payload');
            console.log(payload);
            console.log(this.web3Service.eth);
            // const test = await this.web3Service.eth.getCoinbase();
            // console.log(test);
            
            // return payload.nonce;    
        } catch (err) {
            // find some better way to hanlde error, maybe some error component
            console.log('something went wrong')
            console.log(err);
        }
        
    }

    

    async logout(): Promise<void> {
        this.authUser.set([]);
        logout();
    }
}

export const authStore = new AuthStore();