import { authInterceptor } from './auth.interceptor';
import { globalHeaders } from './global.header';

/**
 *  Interceptors:
 *    Axios's interceptors flow in the reverse of the order you provide them.
 *    If you provide interceptors A, then B, then C,
 *    then requests will flow in C->b->A and responses will flow out A->B->C.
 *    Therefore, it is important to add them in the reverse of the
 *    order you want them to execute.
 *    ... but ...
 *    This might make the code confusing to read, since we
 *    think of the order that we add them as being how they are applied.
 *    So why not list them in the order we want? We can do this by:
 *      1. adding the functions that apply the interceptors to an array in the order we want them to be applied
 *      2. reversing the array, to get them how Axios interceptors wants them
 *      3. executing the functions that apply the interceptors
 */
export const applyHttpInterceptors = () => {
  globalHeaders();


  const interceptors = [
    /**
    
    /**
     * Auth:
     *    Add the authentication headers.
     */
    authInterceptor
  ];

  interceptors.reverse().forEach((f) => f());
}