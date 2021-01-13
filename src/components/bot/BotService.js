const axios = require('axios');
const parse = require('csv-parse/lib/sync');
const { Producer } = require('../../utils/MessageBrokerProducer');

const processCommand = async(stockCode) => {
   try {
    const apiResponse = await axios.get(`https://stooq.com/q/l/?s=${stockCode}&f=sd2t2ohlcv&h&e=csv`);

    const apiParsedResponse = parse(apiResponse.data, {
      columns: true,
      skip_empty_lines: true
    });

    const finalResponse = formatMessage(apiParsedResponse);
    
    Producer.sendMessage(process.env.MESSAGE_BROKER_STOCKS_TOPIC, finalResponse);

    return finalResponse;

   } catch(e) {
      throw new Error(e);
   }
  
}

function formatMessage(apiParsedResponse) {
  const stockTicker = apiParsedResponse[0].Symbol;
  const closePrice = apiParsedResponse[0].Close;

  if (closePrice === 'N/D') {
    return `Sorry, unable to find stock information of ${stockTicker}`; 
  } 
  else {
    return `${stockTicker} quote is $${closePrice} per share`;
  }
}

module.exports = {
    processCommand
}