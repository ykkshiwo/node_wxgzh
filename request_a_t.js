var request = require("request")

request("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx39478853ed9d0e99&secret=be42c16d014d47585dfdb77f29cc6a8c", function(error, response, body){
    console.log(body)
})