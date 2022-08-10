const WebSocket = require('ws');
const Redis = require('redis');

const wss = new WebSocket.Server({ port: 8888 })
const redis =  new Redis.createClient(6379);

redis.connect();

wss.on('connection', (ws) => {
  console.log('Streaming at: ' + (new Date()));
  ws.on('message', (msg) => {
    let messageParseJson = JSON.parse(msg);
    console.log(messageParseJson);
    if(messageParseJson['command'] == 'send-score') {
      redis.hSet('test', 'score', JSON.stringify(messageParseJson['identifier']));
      console.log(`Saved ${messageParseJson['identifier']['score']} scores in Redis at: ` + (new Date()));
    } else {
      console.log(`Quit at: ` + (new Date()));
      redis.hDel('test', 'score');
    }
  });
});

console.log('WebSockets server listening at ws://localhost:8888');
