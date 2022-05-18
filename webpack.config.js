const path = require('path');
const webpack = require('webpack');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./index.html",
  filename: "./index.html"
});


module.exports = {
    context: srcPath,
    resolve: {
        alias: {
            states: path.resolve(srcPath, 'states'),
            utilities: path.resolve(srcPath, 'utilities'),
            components: path.resolve(srcPath, 'components'),
            api: path.resolve(srcPath, 'api')
        }
    },
    entry: {
        index: './index.jsx'
    },
    output: {
        path: distPath,
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env', {
                                        modules: false
                                    }
                                ],
                                '@babel/preset-react'
                            ],
                            plugins: [
                                '@babel/plugin-proposal-class-properties',
                                '@babel/plugin-proposal-object-rest-spread'
                            ]
                        }
                    }
                ]
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options : {
                            url: true
                        }
                    }
                ]
            }
            , {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      //當載入圖片，小於limit時，會將圖片編譯成base64字串形式
                      //當載入圖片，大於limit時，會將圖片使用file-loader模組載入
                      limit: 8192,
                      name: 'img/[name].[ext]',
                      esModule: false // default is true (using ES module)
                    },
                  },
                  // 配置 image-webpack-loader (第一步)
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      // 只在 production 環境啟用壓縮 (第二步)
                      disable: process.env.NODE_ENV === 'production' ? false : true,
                    },
                  },
                ],
            }
        ]
    },
    optimization: {
        splitChunks: {
          chunks: "all"
        }
    },
    plugins: [htmlPlugin],
    devServer: {
        contentBase: distPath,
        compress: true,
        port: 8080
    },
    devtool: 'cheap-source-map'
};
