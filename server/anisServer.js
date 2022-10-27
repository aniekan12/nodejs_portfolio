const http = require('http')
const fs = require('fs')
const url = require('url')

const anisServer = http.createServer((request,response) =>{ 
    var path = url.parse(request.url).path;
    switch(path){
        case '/':
            renderPage(response,'pages/index.html')
            break;
        case '/home':
            renderPage(response,'pages/index.html')
            break;
        case '/about':
            renderPage(response,'pages/about.html')
            break;
        case '/contact':
            renderPage(response,'pages/contact.html')
            break;
        default:
            console.log(path);
            break;
    }
})

function renderPage(response,path){
    fs.readFile(path, (error,data) => {
        if(error) throw error;
        response.writeHead(200, {
            'Content-Type': 'text/html'
          })
          response.write(data)
          response.end()
    })

}

anisServer.listen(4000)