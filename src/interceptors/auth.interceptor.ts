
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Cookie } from '../common/utils/cookie';
import { REDIRECT_401_URL } from '../common/constants';
import { goto } from '$app/navigation';


export const authInterceptor = () => {

    axios.interceptors.request.use((config: AxiosRequestConfig) => {
        const accessToken = Cookie.get('token');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    });

    axios.interceptors.response.use(
        (response: AxiosResponse) => response,
        (error: AxiosError) => {
            if (error.response.status === 401) {
                goto(REDIRECT_401_URL);
            }
            return Promise.reject(error);
        },
    );
}