const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=90970ba496e03a0fe0d2d8e1c628eae6`)
    return resp.data.main.temp;
}
module.exports = {
    getClima
}