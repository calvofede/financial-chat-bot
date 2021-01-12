## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
Small app that received stock codes (tickers) and return close price
	
## Technologies
Project is created with:
* Express: 4
* Kafka
* Csv-parse

## Setup
To run this project, install it locally using npm:

```
$ cd ../jobsity-financial-bot
$ npm install
$ npm start
```
This app will be the producer of messages with topic 'chatbot'