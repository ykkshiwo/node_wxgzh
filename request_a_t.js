var request = require("request")

var APPID = 'wx39478853ed9d0e99'
var APPSECRET = 'be42c16d014d47585dfdb77f29cc6a8c'

request("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET", function(error, response, body){
    console.log(body)
})