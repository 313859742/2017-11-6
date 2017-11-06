const p = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bba.js',
        path: p.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /.js$/,
                use: [ 'babel-loader' ],
                exclude: [
                    p.resolve(__dirname, 'node_modules')
                ]
            }
        ]
    }

};
