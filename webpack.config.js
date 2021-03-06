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
        filename: '[name].bundle.js',
        publicPath: '/',
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
                      //????????????????????????limit???????????????????????????base64????????????
                      //????????????????????????limit????????????????????????file-loader????????????
                      limit: 8192,
                      name: 'img/[name].[ext]',
                      esModule: false // default is true (using ES module)
                    },
                  },
                  // ?????? image-webpack-loader (?????????)
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      // ?????? production ?????????????????? (?????????)
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
        port: 8080,
        https: true,
        historyApiFallback: true
    },
    devtool: 'source-map'
};
