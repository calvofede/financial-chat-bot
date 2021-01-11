const axios = require('axios');
const csvParse = require('csv-parse')

const processCommand = async(stockCode) => {
   axios.get(`https://stooq.com/q/l/?s=${stockCode}&f=sd2t2ohlcv&h&e=csv`)
  .then(function (response) {
    // handle success
    const parsed = csvParse(response.data);
    console.log(parsed)
    return parsed;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
}

module.exports = {
    processCommand
}