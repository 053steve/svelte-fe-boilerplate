import { browser } from '$app/env'
import { Cookie } from '../common/utils/cookie';


export const authenticate = (data) => {
    if (browser) {
        setCookie('token', data.token, 7);
		setCookie('user', JSON.stringify(data.user), 7);
        window.location.href = `/admin-dashboard`;
    }
}

export const setCookie = (cname, cvalue, options = {}) => {
    Cookie.set(cname, cvalue, options);
}

export const removeCookie = (key) => {
	if (browser) {
        Cookie.delete(key, {});
	}
}

export const logout = ():void => {
    removeCookie('token')
	removeCookie('user')
	if (browser) {
		window.location.replace('/')
	}
}