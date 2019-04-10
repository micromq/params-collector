# @micromq/params-collector

Middleware for collect params in one object (params = params + query + body).

## Install

```sh
$ npm i @micromq/params-collector
```

## Usage

```js
const MicroMQ = require('micromq');
const paramsCollector = require('@micromq/params-collector');

const app = new MicroMQ({
  name: process.env.MICROSERVICE_NAME,
  rabbit: {
    url: process.env.RABBIT_URL,
  },
});

app.use(paramsCollector);

app.post('/', (req, res) => {
  /*
  
    before:

      req.params = { id: 5 };
      req.query = { sort: 'id' };
      req.body = { name: 'John' };


    after:

      req.params = { sort: 'id', id: 5, name: 'John' };  

   */
});

app.start();
```
