import axios from 'axios';

axios.interceptors.response.use(async (res) => {
  if (res.data.result === 1) {
    return res;
  }
  throw new Error(res.data.message || 'Unknow Error');
});
