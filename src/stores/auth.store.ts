
import { writable, derived } from 'svelte/store';
import {AuthApi} from 'src/client/api';
import type {LoginForm} from '../common/interfaces/auth';
import {authenticate, logout} from '../services/auth.service';


class AuthStore {

    constructor(
        public authUser = writable([]),
        private authApi = new AuthApi()
    ) { }

    async login(loginForm: LoginForm): Promise<void>  {
        
        const payload = {
            username: loginForm.username,
            password: loginForm.password            
        }

        this.authApi = new AuthApi();
        const result = await this.authApi.auth(payload);
        this.authUser.set([result.data?.payload?.user]);
        authenticate(result.data?.payload);
    }

    async logout():Promise<void> {
        this.authUser.set([]);
        logout();
    }
}

export const authStore = new AuthStore();