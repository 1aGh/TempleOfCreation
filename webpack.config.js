var path = require('path');

const precss = require('precss');
const autoprefixer = require('autoprefixer');
var webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const outputDirectory = "dist";

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
	devtool: 'cheap-module-eval-source-map',
	context: __dirname + '/',
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
		path: path.resolve(__dirname, outputDirectory),
		filename: '[name].js',
		chunkFilename: '[name].js',
	},
	stats: {
		// Configure the console output
		errorDetails: true, //this does show errors
		colors: true,
		modules: true,
		reasons: true
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					// {loader: 'react-hot-loader/babel'},
					{loader: 'babel-loader',
					options: {
						plugins: ['syntax-decorators', 'transform-decorators-legacy', 'transform-class-properties','react-hot-loader/babel'],
						presets: [['es2015', { "modules": false }], 'stage-0', 'react'],
					}
				},
				{loader: 'eslint-loader'},
				]
			},
			{
				test: /\.html$/,
				loader: 'file-loader?name=[name].[ext]',
			},
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
							data: '@import "' + path.resolve(__dirname, 'src/theme/_config.scss') + '";',
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
					'url-loader',
					'img-loader'
				]
			},
			{ test: /\.(png|woff|woff2|eot|ttf)$/,
				loader: 'url-loader?limit=100000'
			}
		]
	},
	devServer: {
		// historyApiFallback: true,
		// hot: true,
		// inline: true,
		// compress: true,
		// disableHostCheck: true,
		// headers: { "X-Custom-Header": "yes" },
		// host: 'localhost', // Defaults to `localhost`
		port: 8080, // Defaults to 8080
		proxy: {
			'^/api/*': {
				target: 'http://localhost:4001/api/',
				secure: false
			}
		}
	},
	plugins: [
		// new CleanWebpackPlugin([outputDirectory]),
		new HtmlWebpackPlugin({
			title: 'Temple Of Creation',
			template: "./index.html",
			favicon: "./store/static/favicon.png"
		})
	]
};
