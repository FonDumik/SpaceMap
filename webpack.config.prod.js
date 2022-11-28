/* eslint-disable */
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const sharedModules = require('./sharedModules.json');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

delete process.env.TS_NODE_PROJECT;

module.exports = {
	entry: './src/index',
	mode: 'production',
	output: {
		path: path.resolve(__dirname, './_file/__TARGET_PATH__/hiddenspace'),
		publicPath: process.env.MODULE_HIDDENSPACE_PUBLIC_PATH,
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		plugins: [new TsconfigPathsPlugin({ baseUrl: 'src' })],
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin({ extractComments: false })],
	},
	module: {
		rules: [
			{
				test: /\.m?js/,
				resolve: {
					fullySpecified: false,
				},
			},
			{
				test: /bootstrap\.tsx$/,
				loader: 'bundle-loader',
				options: {
					lazy: true,
				},
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
							plugins: ['@babel/plugin-transform-runtime'],
						},
					},
				],
			},
			{
				test: /\.svg$/,
				exclude: '/node_modules/',
				use: [
					{
						loader: 'svg-url-loader',
						options: {
							limit: 10000,
						},
					},
				],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new webpack.BannerPlugin({
			banner: () => {
				return `THEHIDDENSPACE`;
			},
		}),
		new Dotenv({
			path: './.env',
		}),
		new webpack.container.ModuleFederationPlugin({
			name: 'hiddenspace',
			filename: 'remoteEntry.js',
			exposes: {
				'./App': './src/App',
			},
			shared: sharedModules,
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new CopyPlugin({
			patterns: [
				{
					from: './public/manifest.yaml',
					transform: (content) =>
						`${content}`.replace(/\$(.+)/g, (val) => process.env[val.slice(1)]),
					to: path.resolve(__dirname, './_file/__TARGET_PATH__/hiddenspace'),
				},
			],
		}),
	],
};
