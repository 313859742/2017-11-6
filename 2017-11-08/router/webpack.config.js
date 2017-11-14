const  path=require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanFolder = require('clean-webpack-plugin');
const webpack = require('webpack');
const rv = (...a) =>path.resolve(__dirname,...a);

module.exports = {
    entry:'./src/app.js',
    output :{
        path:rv('dist'),
        filename : 'app.js'
    },
    devtool:'eval-source-map',
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
        new CleanFolder(['dist']),
        new webpack.ProvidePlugin({
            React : 'react',
            Component : ['react','Component'],
            ReactDOM:'react-dom'
        })
    ],
    devServer : {
        open:true,
        historyApiFallback:true
    }
};