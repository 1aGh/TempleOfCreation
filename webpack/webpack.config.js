var path = require('path');

const precss = require('precss');
const autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var cssLoader = {
	loader: "css-loader",
	options: {
		modules: true,
		importLoaders: 2,
		sourceMap: true,
		localIdentName: '[local]___[hash:base64:5]',
	}
};

var styleLoader = {
	loader: 'style-loader',
};

module.exports = {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	context: path.resolve(__dirname, '..'),
	entry: {
		main: './src/index.js',
		// index: './index.html',
	},
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
		extensions: [".tsx", ".ts", ".js", "scss", ".png", ".jpeg", ".svg"],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
		publicPath: '/'
	},
	optimization: {
		nodeEnv: 'development',
	},
	node: { fs: "empty" },
	stats: {
		// Configure the console output
		errorDetails: true, //this does show errors
		colors: true,
		modules: true,
		reasons: true
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					// {loader: 'react-hot-loader/babel'},
					{loader: 'babel-loader',
					options: {
						plugins: ['transform-runtime', 'syntax-decorators', 'transform-decorators-legacy', 'transform-class-properties','react-hot-loader/babel'],
						presets: [['es2015', { "modules": false }], 'stage-0', 'react'],
					}
					},
					{loader: 'eslint-loader'},
				]
			},
			// {
			// 	test: /\.html$/,
			// 	loader: 'file-loader?name=[name].[ext]',
			// },
			{ test: /\.css$/,
				use: [styleLoader, cssLoader],
			},
			{ test: /\.less$/,
				use: [
					styleLoader,
					cssLoader,
					{
				loader: "less-loader",
				options: {
					outputStyle: 'expanded',
					sourceMap: true,
						}
					}
				]
			},
			{ test: /\.scss$/,
				use: [
					styleLoader,
					cssLoader,
					{
						loader: 'sass-loader',
						options: {
							outputStyle: 'expanded',
							sourceMap: true,
							sourceMapContents: true,
							data: '@import "' + path.resolve(__dirname, '../src/theme/_config.scss') + '";',
						}
					}
				]
			},
			{
				test: /\.svg$/,
				loader: 'babel-loader!svg-react-loader'
			},
			{ test: /\.(jpe?g|png|gif)$/i,
				use: [
					'file-loader',
					'img-loader'
				]
			},
			{ test: /\.(png|woff|woff2|eot|ttf)$/,
				loader: 'file-loader?limit=100000'
			},
			{ test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'file-loader?limit=10240' }
		],
		noParse: /node_modules\/dist/
	},
	plugins: [
		webpackIsomorphicToolsPlugin.development(),
		new BundleAnalyzerPlugin(),
		new webpack.LoaderOptionsPlugin({ options: {} }),
		new HtmlWebpackPlugin({
				title: 'Temple of Creation',
				template: 'index.html',
				favicon: 'store/static/favicon.ico'
		})
	],
	devServer: {
		compress: true,
		disableHostCheck: true,
		historyApiFallback: true,
		headers: { "X-Custom-Header": "yes" },
		proxy: {
			'/api/*': {
				target: 'http://localhost:5111',
				secure: false
			}
		}
	},
};
