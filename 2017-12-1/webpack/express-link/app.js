let express = require('express');

let app = express();
// app.get('/',function (req,res) {
//     res.send('ok')   // 发送数据
// });
// app.get('/list',function (req,res) {
//     res.send('list')
// });
// app.get('*',function (req,res) {
//     res.send('404不存在')
// });
app.get('/',function (req,res) {
    res.sendFile(__dirname+'/views/index.html');
});
app.get('/aboute',function (req,res) {
    res.sendFile(__dirname+'/views/aboute.html');
});
app.listen(3000);
