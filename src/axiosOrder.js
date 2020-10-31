import axios from 'axios';

const burgerAPI = axios.create({
  baseURL: 'https://burgerorder-2fcf6.firebaseio.com/',
})
export default burgerAPI;