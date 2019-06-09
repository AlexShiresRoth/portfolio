const path = require('path');

module.exports = {
    entry: ['@babel/polyfill','./client/index.js'],
    output: {
        path: path.join(__dirname, 'client'),
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
      },
    module: {
        rules: [{
            test: /.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test:/\.css$/,
            use: ["style-loader", "css-loader",]
        }, {
            test: /\.(jpe?g|png|gif|mp3)$/i,
            loader: ['file-loader']
        }]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      }
}