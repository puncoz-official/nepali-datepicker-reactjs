const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

console.log(__dirname)

module.exports = {
    entry: path.join(__dirname, "src/index.js"),

    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js",
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },

            {
                test: /\.css?$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ],
            },

            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" },
                ],
            },

            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src/index.html"),
            filename: "./index.html",
        }),
    ],

    resolve: {
        extensions: [".js", ".jsx"],
    },

    devServer: {
        port: 3001,
    },
}
