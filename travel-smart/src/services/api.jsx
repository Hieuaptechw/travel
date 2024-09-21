import axios from './axios'; 


const getHotels = () => {
  return axios.get('hotels.json'); 
};
const getTour = () => {
  return axios.get('tours.json'); 
};
const getCar = () => {
  return axios.get('car_rentals.json'); 
};
const getBlog = () => {
  return axios.get('hotels.json'); 
};

export {
  getHotels,getBlog,getCar,getTour
};
