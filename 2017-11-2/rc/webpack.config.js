const path=require('path');
const cleanWebpackPlugin=require('clean-webpack-plugin');
const htmlWebpackPlugin=require('html-webpack-plugin');
const rv=(...a) =>path.resolve(__dirname,...a);
module.exports={
	entry:'./src/app.js',
	output:{
		path: rv('dist'),
        filename: '	app.js'
	},
	module:{
		rules:[//匹配规则
			{
				test:/\.js$/,//以.js结尾的文件
				use:['babel-loader'],//
				exclude:[
					rv('node_modules')//排除node_modules这个文件
				]
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:"index.html" ,
			template:'./src/index.html'
		}),
		new cleanWebpackPlugin(['dist'])
	]
}
