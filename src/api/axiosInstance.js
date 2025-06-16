import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Wyygw2vZoRv6c0CZxLKisOVAM_EnVGSlTq0lc6_zl-0',
  },
});

export default axiosInstance;
