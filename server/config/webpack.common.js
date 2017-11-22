// https://webpack.js.org/guides/production/#setup
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const NodeLoader = require('node-loader');

const dist = '../../dist/server';
module.exports = {
	entry: './server/index.js',
	target: 'node',
    resolve: {
        extensions:[ '.ts', '.tsx', '.webpack.js', '.js', '.jsx', '.json', '.node' ]
    },
	module: {
		loaders: [ { 
			test: /\.ts$/, 
			loader: 'ts-loader',
            options: {
            	configFile: './server/config/tsconfig.json'
            }
		}, { 
			test: /\.node$/, 
			loader: 'node-loader'
		}, {
			test: /rx\.lite\.aggregates\.js/,
			use: 'imports-loader?define=>false'
		}
    ] },
	plugins: [
		new CleanWebpackPlugin( [ dist ] ),
	],
	output: {
		path: path.resolve(__dirname, dist ),
		filename: '[name].bundle.js'
	},
	node: {
		__dirname: false,
		__filename: false
	}
};
