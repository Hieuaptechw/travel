import axios from './axios'; 

// Hàm lấy danh sách khách sạn
const getHotels = () => {
  return axios.get('hotels.json'); // Đảm bảo có .json ở cuối URL
};

// Xuất các hàm để sử dụng ở nơi khác
export {
  getHotels,
};
