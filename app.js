let express = require("express");
const mongoose = require('mongoose');

require("dotenv").config();

// Create global app object
let app = express();

require("./server/app-config")(app);



// const http = require('http').Server(app);

// finally, let's start our server...
let server = app.listen(8000, function () {
  console.log("Listening on port " + server.address().port);
});

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  console.log('Closing http server.');

  server.close(() => {
    console.log('Http server closed.');
    // boolean means [force], see in mongoose doc
    mongoose.connection.close(false, () => {
      console.log('MongoDb connection closed.');
      process.kill(process.pid, 'SIGTERM');
      process.exit(0);

    });
  });
});
process.once('SIGUSR2', function () {

  server.close(() => {
    console.log('Http server closed.');
    // boolean means [force], see in mongoose doc
    mongoose.connection.close(false, () => {
      console.log('MongoDb connection closed.');
      process.kill(process.pid, 'SIGUSR2');
      process.exit(0);
    });
  });
});

process.on('SIGINT', function () {
  // this is only called on ctrl+c, not restart
  server.close(() => {
    console.log('Http server closed.');
    // boolean means [force], see in mongoose doc
    mongoose.connection.close(false, () => {
      console.log('MongoDb connection closed.');
      process.kill(process.pid, 'SIGINT');

      process.exit(0);
    });
  });
});