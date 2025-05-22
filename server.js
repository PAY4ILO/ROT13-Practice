const http = require('http')
const fs = require('fs')
const path = require('path')

let server = http.createServer((req, res) => {
    res.setHeader( 'Content-Type', 'text/html');

    const createPath = (page) => path.resolve(__dirname, 'templates', `${page}.html`);

if (req.url.startsWith('/templates/image/') || req.url.startsWith('/templates/script/') || req.url.startsWith('/templates/style/')) {
        const filePath = path.join(__dirname, req.url);
        const extname = path.extname(filePath);
        let contentType = 'text/plain';

        switch (extname) {
            case '.js':
                contentType = 'application/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
        }

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error(`Error reading file: ${filePath}`, err);
                res.statusCode = 404;
                res.end('File not found');
                return;
            }
            res.setHeader('Content-Type', contentType);
            res.statusCode = 200;
            res.write(data);
            res.end();
        });
        return;
    }

    res.setHeader('Content-Type', 'text/html');
    let basePath = '';

    switch (req.url) {
        case '/':
        case '/index':
            basePath = createPath('index');
            res.statusCode = 200;
            break;
        default:
            basePath = createPath('error');
            res.statusCode = 404;
            break;
    }

    fs.readFile(basePath, (err, data) => {
        if (err) {
            console.log(err);
            res.statusCode = 500;
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
});

const PORT = 3000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log(`Сервер запущен: http://${HOST}:${PORT}`)
})