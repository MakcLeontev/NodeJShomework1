/**
 * Напишите HTTP сервер и реализуйте два обработчика, где:
— По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
— А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
— Также реализуйте обработку несуществующих роутов (404).
—  На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.
 */
const http = require('http');
let d = 0;
let i = 0;
let e = 0;

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.write(String(++i))
        res.end('<a href="/about">Перейти на страницу обо мне!<a/>');
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.write(String(++d));
        res.end('<a href="/">Перейти на страницу главная!<a/>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.write(String(++e));
        res.end('<h1>Страница 404<h1/>');
    }
});

const port = '3000';

server.listen(port);