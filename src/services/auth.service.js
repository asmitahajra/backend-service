const axios = require('axios').default;

const verifyToken = async (token) => {
  // const response = await axios.post('http://auth-service:7000/validateToken', {}, {
  //   headers:
  //   { Authorization: `Bearer ${token}` },
  // });
  // return response.data;
  const response = await axios.post('http://auth-service:7000/validateToken', {}, {
    headers:
    { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

module.exports = { verifyToken };
