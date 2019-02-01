const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

const bluebird = require('bluebird');
// const redis = require('redis');

// bluebird.promisifyAll(redis.RedisClient.prototype);
// bluebird.promisifyAll(redis.Multi.prototype);


const Promise = require('bluebird');

const redis = Promise.promisifyAll(require('redis'));

const client = redis.createClient(6379);

const PORT = 3000;

// Middleware
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get(`/start/:start/end/:end`, (req, res) => {
  console.log('getting here');
  client.get(`/start/${req.params.start}/end/${req.params.end}`, (err, result) => {
    if (err || result === null) {
      axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${req.params.start}&end=${req.params.end}`)
        .then((data) => {
          // save to client
          let historicData = data.data.bpi;
          client.set(`/start/${req.params.start}/end/${req.params.end}`, JSON.stringify(historicData));
          return res.status(200).send(historicData);

        })
        .catch((err) => {
          throw err;
        });
    } else {
      return res.status(200).send(JSON.parse(result));
    }
  })
}); 

const readReviewByID = (req, res) => {
  client.get(`/reviews/${req.params.reviewID}`, (err, result) => {
    if (err || result === null) {
      Review.find({ _id: Number(req.params.reviewID) }, (error, review) => {
        if (error) {
          return res.status(500).send(error);
        }
        client.set(`/reviews/${req.params.reviewID}`, JSON.stringify(review));
        return res.status(200).send(review);
      });
    } else {
      return res.status(200).send(JSON.parse(result));
    }
  });
};

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});


module.exports = app;