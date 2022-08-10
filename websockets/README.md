# WebSockets load testing example

Demo basic app use WebSocket and Redis

## Running the WebSockets server

First, install the server dependencies:

```
npm install
```

After installing the dependencies, start the WebSockets server:

```
node app.js
```

This command will start a WebSockets server listening at ws://localhost:8888.

## Running Artillery test

This directory contains a test script (`websockets.yml`) which demonstrates different test scenarios for load testing a WebSockets implementation.

Once the WebSockets server is up and running, execute the test script:

```
artillery run websockets.yml
```
