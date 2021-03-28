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
					{
						loader: 'style-loader',
						// options: {
						//   // injectType: "singletonStyleTag"
						//   // injectType: "linkTag"
						// }
					},
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
				{ from: `./${process.env.CURRENT}/src/style.css` },
				{ from: `./${process.env.CURRENT}/src/style.css.map` },
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
module.exports = config;
