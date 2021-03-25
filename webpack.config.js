const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

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
		new CopyPlugin([
			{
				patterns: [{ from: './temat2/src/*.html', to: '' }],
			},
		]),
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		path: path.resolve(__dirname, './temat2/dist'),
		filename: 'bundle.js',
	},
};
module.exports = config;
