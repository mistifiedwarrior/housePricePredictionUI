import axios from 'axios'

const API = (url, {data, ...options} = {}) => {
  return new Promise((resolve, reject) => {
    axios({url: `http://localhost:5000${url}`, ...options, headers: options.headers, data})
      .then((res) => resolve(res.data))
      .catch((error) => reject(error))
  });
}


export default API
