## Table of contents
* [General info](#general-info)
* [Dependencies](#Dependencies)
* [Setup](#setup)

## General info
Small app that received stock codes (tickers) and return close price
	
## Dependencies
Project is created with:
* Express: 4
* Kafka

## Setup
Prior to run this app we need to have Kafka container running since
this app will be the producer.

To run docker kafka image:

```
docker run -p 2181:2181 -p 9092:9092 --env ADVERTISED_HOST=localhost --env ADVERTISED_PORT=9092 spotify/kafka
```

To run this project, install it locally using npm:

```
$ cd ../financial-chat-bot
$ npm install
$ npm start
```

If kafka image is running fine this app should show by console
```
Kafka producer connection is ready
```