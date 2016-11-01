var webpack = require('webpack');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: {
        app: [
            "./app/index"
        ]
    },

    resolve: {
        modulesDirectories: ["web_modules", "node_modules"],
        extensions: ['', '.js'],
        alias: {
            'common': path.resolve(__dirname, 'common'),
            'css': path.join(__dirname, '../css'),
            'less': path.join(__dirname, '../less'),
        }
    },

    output: {
        path: path.join(__dirname, '../webapp'),
        filename: "[name].bundle.min.js",
        publicPath: '/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel-loader'],
                include: path.join(__dirname, './'),
                exclude: path.resolve(__dirname, "node_modules")
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.eot$/,
                loader: "file-loader?name=[path][name].[ext]"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader" },
            {
                test: /\.less$/, loader: "style-loader!css-loader?modules!less"
            },
            {
                test: /\.scss$/, loader: "style-loader!css-loader?modules!sass"
            },
            {
                test: /\.css$/, loader: "style-loader!css-loader?modules",
                exclude: path.resolve(__dirname, "app/stylesheet/css")
            },
            {
                test: /\.css$/, loader: "style-loader!css-loader?",
                include: path.resolve(__dirname, "app/stylesheet/css")
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
    ]
};