import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://travel-trip-3e5b3-default-rtdb.firebaseio.com/',
  headers: {
    'Content-Type': 'application/json',
  }
});

// Xuất instance để sử dụng trong các file khác
export default instance;
