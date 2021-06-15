const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
require('dotenv').config();

const config = {
	entry: `./${process.env.CURRENT}/src/app.ts`,
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		],
	},

	devtool: 'inline-source-map',
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: `./${process.env.CURRENT}/src/index.html` },
				// { from: `./${process.env.CURRENT}/src/styles/style.css` },
				// { from: `./${process.env.CURRENT}/src/styles/style.css.map` },
			],
		}),
	],

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		path: path.resolve(__dirname, `./${process.env.CURRENT}/dist`),
		filename: 'bundle.js',
	},
};
const configServer = {
	target: 'node',
	mode: 'development',
	entry: `./${process.env.CURRENT}/src/server.ts`,
	output: {
		filename: 'server.js',
		path: path.resolve(__dirname, `./${process.env.CURRENT}/dist`),
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json'],
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			// all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
			{
				test: /\.tsx?$/,
				use: ['ts-loader'],
				exclude: /node_modules/,
			},
		],
	},
	externals: {
		bufferutil: 'bufferutil',
		'utf-8-validate': 'utf-8-validate',
	},
};
const configClient = {
	entry: `./${process.env.CURRENT}/src/client.ts`,
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		],
	},

	devtool: 'inline-source-map',
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: `./${process.env.CURRENT}/src/index.html` },
				// { from: `./${process.env.CURRENT}/src/styles/style.css` },
				// { from: `./${process.env.CURRENT}/src/styles/style.css.map` },
			],
		}),
	],

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		path: path.resolve(__dirname, `./${process.env.CURRENT}/dist`),
		filename: 'index.js',
	},
};
module.exports = [config, configServer, configClient];
