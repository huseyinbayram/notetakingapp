import * as phaethon from 'phaethon';

const server = new phaethon.Server();
server.listener = request => new phaethon.ServerResponse('Hello');
server.listenHttp(8800);
