import axios from 'axios';

axios.interceptors.response.use(async (res) => {
  const data = res.data;
  if (data && typeof data === 'object' && Object.prototype.hasOwnProperty.call(data, 'result') && data.result !== 1) {
    throw new Error(res.data.message || 'Unknow Error');
  }
  return res;
});
