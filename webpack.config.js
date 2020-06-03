// webpack.config.js

const path = require('path');

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
                        loader: 'css-loader',
                    }
                ]
            }
        ]
    },
}