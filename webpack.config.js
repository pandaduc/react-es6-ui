var path = require('path');
var webpack = require('webpack');

var config = {
    entry: [        
        './src/app.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        pathInfo: true,
        filename: 'bundle.js',
        // publicPath: '/build',
        // watch: true
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        stats: {
            modules: false,
			cached: false,
			colors: true,
			chunk: false
        },
        
        // Enable history API fallback so HTML5 History API based
        // routing works. This is a good default that will come
        // in handy in more complicated setups.
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        
        host: process.env.HOST,
        port: process.env.PORT || 3067
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            {
                // ASSET LOADER
                // Reference: https://github.com/webpack/file-loader
                // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
                // Rename the file using the asset hash
                // Pass along the updated reference to your code
                // You can add here any file extension you want to get copied to your output
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;