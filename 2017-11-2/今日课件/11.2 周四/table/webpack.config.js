const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const rv = (...a)=>path.resolve(__dirname,...a);

module.exports = {
    entry: './src/app.js',  //入口
    output: {//出口
        path: rv('dist'),//将打包好的文件放到dist的文件夹下
        filename: 'app.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react']
                        }
                    }
                ],
                exclude:[rv('node_modules')] 
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ]

};
