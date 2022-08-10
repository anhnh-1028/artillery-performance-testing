module.exports = { sendScoreRequest, deleteKey };

function sendScoreRequest(userContext, events, done) {
  let message = {
    command: 'send-score',
    identifier : {
      timestamp: Date.now(), score: Math.floor(Math.random() * 100)
    }
   };

  // set the "data" variable for the virtual user to use in the subsequent action
  userContext.vars.message_send_score = JSON.stringify(message);

  return done();
}

function deleteKey(userContext, events, done) {
  let message = {
    command: 'quit'
   };

  // set the "data" variable for the virtual user to use in the subsequent action
  userContext.vars.message_delete_key = JSON.stringify(message);

  return done();
}
