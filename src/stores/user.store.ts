import { writable, derived } from 'svelte/store';
import {UserApi} from '../client/api';



class UserStore {
    

    constructor(
        public allUsers = writable([]),
        private userApi = new UserApi()
    ) { }
    
    async getAllUsers() {

        try {
            const result = await this.userApi.getAllUsers();
            this.allUsers.set([result?.data.payload.users]);
        } catch (error) {
            // console.log('error');
            // console.log(error);
        }
        
    }

}

export const userStore = new UserStore();