
import { writable, derived } from 'svelte/store';
import {AuthApi} from 'src/client/src/apis/AuthApi';
import type {AuthOperationRequest} from 'src/client/src/apis/AuthApi';
import type {LoginForm} from '../common/interfaces/auth';
import {authenticate, logout} from '../services/auth.service';


class AuthStore {

    
    private authApi: AuthApi



    constructor(
        public authUser = writable([])
    ) { }

    async login(loginForm: LoginForm): Promise<void>  {
        
        const payload: AuthOperationRequest = {
            authRequest: {
                email: loginForm.email,
                password: loginForm.password
            }
            
        }

        this.authApi = new AuthApi();
        const result = await this.authApi.auth(payload);
        this.authUser.set([result.payload.user]);
        authenticate(result.payload);
    }

    async logout():Promise<void> {
        this.authUser.set([]);
        logout();
    }
}

export const authStore = new AuthStore();