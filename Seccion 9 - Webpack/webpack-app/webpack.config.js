const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode : 'development',

    output: {clean:true},

    module: {
        rules : [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources:false
                }

            },
            {
            test: /\.css$/i,
            use: ["style-loader","css-loader"]
        }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: 'Mi webpack App',
            filename: 'index.html'
        })
    ]


      
}