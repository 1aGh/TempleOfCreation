var webpack = require('webpack');
var path = require("path");

var projectRootPath = path.resolve(__dirname, '../');
var assetsPath = path.resolve(projectRootPath, './dist');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var CleanPlugin = require('clean-webpack-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));
var CompressionPlugin = require("compression-webpack-plugin");
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	devtool: 'cheap-module-source-map',
	context: path.resolve(__dirname, '..'),
	entry: {
		main: './src/index.js',
//     vendor: 'moment'
	},
	// [
	//   './src/index.js'
	// ],
	resolve: {
		modules: [
			path.resolve('./src'),
			path.resolve('./src/components'),
			path.resolve('./src/containers'),
			path.resolve('./src/theme'),
			path.resolve('./node_modules'),
			path.resolve('./store'),
			path.resolve('./store/static'),
		],
		extensions: [".tsx", ".ts", ".js", "scss"],
		symlinks: false,
//    packageMains: ['browser', 'web', 'browserify', 'main', 'style']
	},
	output: {
		path: path.resolve(__dirname, "../dist"),
		publicPath: '',
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js',
	},
	optimization: {
		nodeEnv: 'production',
		minimize: true,
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					compress: {
						warnings: false, // Suppress uglification warnings
						pure_getters: true,
						unsafe: true,
						unsafe_comps: true,
					},
					output: {
						comments: false,
					},
					exclude: [/\.min\.js$/gi] // skip pre-minified libs
				}
			})
		],
		splitChunks: {
			chunks: 'all',
			minSize: 30000,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
	},
	module: {
		rules: [
			{ test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					// {loader: 'react-hot-loader'},
					{loader: 'babel-loader',
						options: {
							presets: [['es2015', { "modules": false }], 'stage-0', 'react'],
							plugins: ['transform-runtime', 'transform-decorators-legacy']
						}
					},
					{loader: 'strip-loader',
						options: {
							strip: ['debug','console.log'],
						},
					},
				]
			},
			{ test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader?modules&importLoaders=2&sourceMap",
				})
			},
			{ test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader?modules&importLoaders=2&sourceMap!less?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
				})
			},
			{ test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								importLoaders: 2,
								sourceMap: true,
							}
						},{
							loader: 'sass-loader',
							options: {
								outputStyle: 'nested',
								// sourceMap: true,
								// sourceMapContents: true,
								data: '@import "' + path.resolve(__dirname, '../src/theme/_config.scss') + '";',
								includePaths: [path.resolve(__dirname, "./node_modules")]
							}
						}
					]
				})
			},
			{
				test: /\.svg$/,
				loader: 'babel-loader!svg-react-loader'
			},
			{ test: /\.woff2?$(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?limit=10000&mimetype=application/font-woff" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?limit=10000&mimetype=application/octet-stream" },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
			{ test: /\.(jpe?g|png|gif|ico)$/i, loader: 'file-loader?name=[name].[ext]'},
			{ test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'file-loader?limit=10240' }
		],
		noParse: /node_modules\/dist/
	},
	plugins: [
		new CleanPlugin([assetsPath], { root: projectRootPath }),

		// css files from the extract-text-plugin loader
		new ExtractTextPlugin({
			filename: '[name]-[chunkhash].css',
			allChunks: true
		}),

		// optimizations
		// new webpack.optimize.UglifyJsPlugin({
		// 	mangle: true,
		// 	compress: {
		// 		warnings: false, // Suppress uglification warnings
		// 		pure_getters: true,
		// 		unsafe: true,
		// 		unsafe_comps: true,
		// 		screw_ie8: true
		// 	},
		// 	output: {
		// 		comments: false,
		// 	},
		// 	exclude: [/\.min\.js$/gi] // skip pre-minified libs
		// }),
		webpackIsomorphicToolsPlugin,
		new HtmlWebpackPlugin({
				title: 'Temple of Creation',
				template: 'index.html',
				favicon: 'store/static/favicon.ico'
		}),
		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0
		})
	]
};