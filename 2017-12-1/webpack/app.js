// console.log('我是服务端');
// let tools = require('./tools.js');  // 引入文件
// console.log(tools.add(1,2));
let http = require('http');
let fs = require('fs');
let app = http.createServer(function (req,res) {
    console.log('有人来访问了');

    // // res.write('hello');
    // res.end('hello');
    // readFile(); 读取html的页面
    fs.readFile('./vuerouter/index.html' , function (err,data) {
        if(err){
            console.log(err);
        }
// 获取到的data数据是二进制形式，用toStering（） 转换成我们认识的字符
        res.end(data.toString());
    })
});
app.listen(3000);