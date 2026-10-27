const http = require("http")

const Server = http.createServer((request,response)=>{
    response.end(
        "welcome to NodeJs with http"
    )
})

Server.listen(4000,()=>{
    console.log("server is running on: http://localhost:4000")
})j