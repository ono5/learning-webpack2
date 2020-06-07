// webpack.config.js

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/js/main.js', // エントリーファイルの指定
    output: {
        // resolveで絶対パスを取得できる
        path: path.resolve(__dirname, './dist'), // 出力先
        filename: 'js/main.js', // 任意の名前に書き換えられる
    },
    module: {
        rules: [
            {
                test: /\.css/, // testにてファイル名を検知する
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, // loaderは、下から適用されていくので、css-loaderより前に設定する
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                test: /\.png/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            esModule: false,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/main.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
}
