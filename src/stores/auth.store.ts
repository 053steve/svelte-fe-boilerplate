
import { writable } from 'svelte/store';
import { AuthApi, AuthType, UserApi } from 'src/client/api';
import type { LoginForm } from '../common/interfaces/auth';
import { authenticate, logout } from '../services/auth.service';
// import { browser } from "$app/env";
import { web3 } from 'svelte-web3'
import {ENV_OBJ} from '$lib/env';
// import { get } from 'svelte/store';
// import { session } from "$app/stores";



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
            const { NONCE_MSG } = ENV_OBJ;
            const nonceResult = await this.userApi.getOrCreateNonce({publicKey});
            const {payload} = nonceResult.data;
            
            const msg = `${NONCE_MSG}${payload.nonce}`
            console.log(msg)
            const signature = await this.web3Service.eth.personal.sign(msg, publicKey);

            const authResult = await this.authApi.auth({publicKey, signature, authType: AuthType.W3WALLET});
            this.authUser.set([authResult.data?.payload?.user]);
            authenticate(authResult.data?.payload);

            
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