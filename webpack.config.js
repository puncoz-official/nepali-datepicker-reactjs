const { resolve, join } = require("path")

const ROOT = __dirname
const DESTINATION = join(ROOT, "/dist")

module.exports = env => ({
    mode: env.NODE_ENV || "development",

    devtool: env.NODE_ENV === "production" ? false : "inline-source-map",

    entry: {
        main: resolve(ROOT + "/src/index.ts"),
    },

    context: ROOT,

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: ["ts-loader"],
                exclude: [/node_modules/],
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },

    plugins: [],

    externals: {
        // Don't bundle react
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React",
        },
    },

    output: {
        filename: "index.js",
        libraryTarget: "umd",
        library: "nepali-datepicker",
        path: DESTINATION,
    },
})
