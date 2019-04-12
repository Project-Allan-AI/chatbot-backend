const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const handler = require('./controllers/handlerController')
const livecheck = require('./routes/livecheck')
const chatbot = require('./routes/chatBot');
const chatbotCreate = require('./routes/chatbotCreate')
const chatbotTest = require('./routes/chatbotTest')
const cors = require('cors')
require('dotenv').config()

module.exports = createServer();

function createServer(){

  let port = 5000;

  const app = express();

  app.use(cors())

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('*', handler.requestLogging);

  app.use('/livecheck', livecheck.router());

  app.use('/chatbot/api', chatbot.router());

  app.use('/chatbotCreate/api', chatbotCreate.router())

  app.use('/chatbotTest/api', chatbotTest.router())

  app.get('*', (req,res) => {
    res.send('Hello this is Allan AI, please use our chat client to access the magic')
  })

  app.listen(process.env.PORT || port, (err) =>{
    if (err) throw err
    console.log(`Allan AI backend is listening on port ${port}`);
    //log.info(`Allan AI backend listening on port ${port}}`);
  })


  process.on('SIGBREAK', () => shutdown());
  process.on('SIGINT', () => shutdown());
  process.on('SIGTERM', () => shutdown());

}

function shutdown () {
  //log.info('Stopping...');
  process.exit();
}
