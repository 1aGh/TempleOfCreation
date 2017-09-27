var path = require('path');

const precss = require('precss');
const autoprefixer = require('autoprefixer');

var cssLoader = {
  loader: "css-loader",
  options: {
    modules: true,
    importLoaders: 2,
    sourceMap: true,
    localIdentName: '[local]___[hash:base64:5]'
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
		index: './index.html',
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
              }
            }
          ]
      },
		]
	}
};
