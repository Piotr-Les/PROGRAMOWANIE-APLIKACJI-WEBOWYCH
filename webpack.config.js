const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
require('dotenv').config();

const config = {
	entry: './temat2/src/app.ts',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	devtool: 'inline-source-map',
	plugins: [
		new CopyPlugin({
			patterns: [{ from: `./${process.env.CURRENT}/src/index.html` }],
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
module.exports = config;
