var path = require('path');

const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	context: __dirname + '/',
	entry: {
		javascript: './src/index.js',
		html: './index.html',
	},
	resolve: {
		modules: [
			path.resolve('./src'),
			path.resolve('./src/components'),
			path.resolve('./src/containers'),
			path.resolve('./node_modules'),
		],
		extensions: [".tsx", ".ts", ".js", "scss"],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
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
          {loader: 'react-hot-loader'},
          {loader: 'babel-loader',
            options: {
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
			{
			  test: /\.scss$/,
			  loader: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap',
			}
		]
	},
};
