const handler = require('serve-handler');
const http = require('http')
const fs = require('fs')
const httpPort = 80

http.createServer((request, response) => {
  return handler(request, response, {
    "rewrites": [
      { "source": "**", "destination": "/index.html" }
    ]
  });
}).listen(httpPort, () => {
  console.log('Server listening on: http://localhost:%s', httpPort)
})
