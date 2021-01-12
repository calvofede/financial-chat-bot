const kafka = require('kafka-node');

Kafka = module.exports;
let producer;

const getProducer = () => {
  if (producer) return producer;

  const Producer = kafka.Producer;
  const client = new kafka.KafkaClient({kafkaHost: process.env.MESSAGE_BROKER_HOST});
  const _producer = new Producer(client);

  _producer.on('ready', () => {
    console.log('Kafka producer connection is ready');
  });

  _producer.on('event.error', (err) => {
    console.log(`Event Error on producer ${err}`);
  });

  _producer.on('error', (err) => {
    console.log(`Error on producer ${err}`);
  });

  producer = _producer;
  return producer;
};

const retryProduce = (topic, bufferedMessage) => {
  try {
    let payloads = [
      {
        topic: topic,
        messages: bufferedMessage
      }
    ];
    getProducer().send(payloads, function (error, data) {
      if (error) console.log('Error', error);
      if (data) console.log(data);
    });
  } catch (err) {
    console.log(err);
  }
};


Kafka.Producer = {
  getProducer,
  start: getProducer,
  sendMessage: (topic, message) => {
    const messageParsed = typeof message === 'object'
      ? JSON.stringify(message)
      : message.toString();

    const bufferedMessage = Buffer.from(messageParsed);

    try {
      retryProduce(topic, bufferedMessage);
    } catch (err) {
      console.log(`Error on sendMessage: ${err}`);
    }
  },
};
