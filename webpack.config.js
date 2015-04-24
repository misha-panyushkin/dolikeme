module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', "./dynamic/app.js"]
    },
    output: {
        path: __dirname,
        filename: "dynamic/bundle.js",
        publicPath: "/assets/"
    },
    module: {
        loaders: [
            { 
                test: /\.js$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    }
};