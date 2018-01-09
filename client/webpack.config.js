const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src'),
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [{
			// https://github.com/apollographql/apollo-link/issues/248
			test: /node_modules\/apollo-link.*?\/lib\/.*?.js/,
			loader: 'string-replace-loader',
			options: {
				search: 'exports.Observable = Observable',
				replace: 'exports.Observable = Observable.default'
			}
		}, {
			test: /\.jsx?$/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
				},
			},
		}, {
			test: /\.s?css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader']
			}),
		}],
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
		new HtmlWebpackPlugin({
			inject: true,
			filename: 'index.html',
			template: path.resolve(__dirname, 'src/assets/index.html'),
		}),
	],
	resolve: {
		extensions: ['.jsx', '.js'],
	}
};
