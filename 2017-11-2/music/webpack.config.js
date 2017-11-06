const path=require('path');
const rv=(...a)=>path.resolve(__dirname,...a);
const HtmlEebpackPluagin=require('html-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
module.exports={
    entry:'./src/app.js',
    output:{
        path:rv('dist'),
        filename:'app.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:['babel-loader'],
                exclude:[rv('node_modules')]
            }
        ]
    },
    plugins:[
        new HtmlEebpackPluagin({

            filename:'index.html',
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};
