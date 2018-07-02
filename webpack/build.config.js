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

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
		filename: '[name]-[chunkhash].js',
		chunkFilename: '[name]-[chunkhash].js',
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
			{ test: /\.(jpe?g|png|gif|ico)$/i,
				use: [
					'url-loader',
					'img-loader'
				]
			},
			{ test: /\.(png|woff|woff2|eot|ttf)$/,
				loader: 'url-loader?limit=100000'
			},
			// { test: /\.woff2?$(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
			// { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
			// { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
			// { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
			// { test: /\.(jpe?g|png|gif|ico)$/i, loader: 'file-loader?name=[name].[ext]'},
			{ test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240' }
		],
		noParse: /node_modules\/dist/
	},
	plugins: [
		new CleanPlugin([assetsPath], { root: projectRootPath }),

		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),

		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor', // Specify the common bundle's name.
			minChunks: function (module) {
				// this assumes your vendor imports exist in the node_modules directory
				return module.context && module.context.indexOf('node_modules') !== -1;
			}
		}),

		// new webpack.optimize.CommonsChunkPlugin({
		//   name: 'manifest', // Specify the common bundle's name.
		// }),

		// css files from the extract-text-plugin loader
		new ExtractTextPlugin({
			filename: '[name]-[chunkhash].css',
			allChunks: true
		}),

		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			},
			__DEV__: false
		}),

		// optimizations
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			sourceMap: false
		}),
		webpackIsomorphicToolsPlugin,
		new HtmlWebpackPlugin({
				title: 'Temple of Creation',
				template: 'index.html',
				favicon: 'store/static/favicon.ico'
		})
	]
};