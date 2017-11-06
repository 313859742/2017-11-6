const  path=require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanFolder = require('clean-webpack-plugin');
const rv = (...a) =>path.resolve(__dirname,...a);

module.exports = {
    entry:'./src/app.js',
    output :{
        path:rv('dist'),
        filename : 'app.js'
    },
    module:{
        rules :[
            {
                test: /\.js$/,
                use : [
                    {
                        loader : 'babel-loader',
                        options :{
                            presets : ['react'],
                            plugins : ['transform-object-rest-spread']
                        }
                    }
                ],
                exclude : [rv('node-modules')]
            },
            {
                test : /\.css$/,
                use : ['style-loader' , 'css-loader']
            },
            {
                test : /\.(jpg|png|gif|jpeg)$/,
                use : ['file-loader']
            }
        ]
    },

    plugins : [
        new htmlWebpackPlugin({
            filename : 'index.html',
            template : './src/index.html'
        }),
        new CleanFolder(['dist'])
    ],
    devServer : {
        open:true
    }
};