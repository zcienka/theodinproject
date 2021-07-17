const path = require('path')
// let extractTextPlugin = require("extract-text-webpack-plugin")
let htmlWebpackPlugin = require("html-webpack-plugin")
let cleanWebpackPlugin = require("clean-webpack-plugin")
// let extractPlugin = new Extract
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
        ],
    },
    plugins: [
        // extractPlugin,
        new htmlWebpackPlugin({
            filename: "home.html",
            template: "src/home.html"
        }),
        new htmlWebpackPlugin({
            filename: "menu.html",
            template: "src/menu.html"
        }),
        new htmlWebpackPlugin({
            filename: "contact.html",
            template: "src/contact.html"
        }),
        new htmlWebpackPlugin(),
        // new cleanWebpackPlugin(['dist'])
    ]
};


// const HtmlWebpackPlugin = require('html-webpack-plugin');
//
// let htmlPageNames = ['home', 'menu', 'contact'];
// let multipleHtmlPlugins = htmlPageNames.map(name => {
//     return new HtmlWebpackPlugin({
//         template: `./src/${name}.html`, // relative path to the HTML files
//         filename: `${name}.html`, // output HTML files
//         chunks: [`${name}`] // respective JS files
//     })
// });
//
// module.exports = {
//     entry: {
//         main: './js/main.js',
//         example1: './js/example1.js',
//         //... repeat until example 4
//     },
//     module: {
//         //.. your rules
//     };
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: "./src/index.html",
//             chunks: ['main']
//         })
//     ].concat(multipleHtmlPlugins)
//
// };
