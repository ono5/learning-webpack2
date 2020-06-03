// webpack.config.js

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js', // エントリーファイルの指定
    output: {
        // resolveで絶対パスを取得できる
        path: path.resolve(__dirname, './dist'), // 出力先
        filename: 'main.js', // 任意の名前に書き換えられる
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
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
}
