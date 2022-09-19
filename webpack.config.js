const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: "eval",
    mode: "development",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
        ],
    },
};