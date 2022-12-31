import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const loginUser = async (endpoint, body) => {
  const { data } = await axios.post((baseURL + endpoint), body);
  return data;
};

const createUser = async (endpoint, body) => {
  const { data } = await axios.post((baseURL + endpoint), body);
  return data;
};

export {
  loginUser,
  createUser,
};
