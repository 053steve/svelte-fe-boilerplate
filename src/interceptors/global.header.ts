
import axios from 'axios';

export const globalHeaders = () => {
  axios.defaults.headers.common['Content-Type'] = 'application/json';
}