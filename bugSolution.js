const http = require('http');
const domain = require('domain');

const server = http.createServer((req, res) => {
  const d = domain.create();
  d.on('error', (err) => {
    console.error('Domain error handler caught:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });

  d.add(req);
  d.add(res);
  d.run(() => {
    if (req.url === '/error') {
      throw new Error('Intentional server error');
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});