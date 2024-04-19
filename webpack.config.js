const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function crossPlatformPathRegex(regexp) {
	if (path.sep === '\\') {
		regexp = new RegExp(
			regexp.source.replace(/(^|[^\\])\\\//g, '$1\\\\').replace(/(\^)\//g, '$1\\\\'),
			regexp.flags
		);
	}
	return regexp;
}

const host = 'localhost';
module.exports = {
	entry: path.resolve(__dirname, 'src/app.js'),
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devtool: 'source-map',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(less|css)$/,
				exclude: /node_modules/,
				use: [
					// compiles Less to CSS
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							modules: {
								localIdentRegExp: crossPlatformPathRegex(
									/(?:([^/@]+?)(?:-(?:widgets?|components?|screens?))?\/)?src\/(?:components|screens)\/(.+?)(\/[a-z0-9._-]+[.](less|css))?$/
								),
								localIdentName: '[2]_[local]'
							},
						},
					},
					{
						loader: 'less-loader',
						options: {
							sourceMap: true
						}
					},
				],
			},
		],
	},
	devServer: {
		webSocketServer: 'ws',
		compress: true,
		hot: true,
		host,
		port: 3000,
		historyApiFallback: true,
	},
	plugins: [
		// Re-generate index.html with injected script tag.
		// The injected script tag contains a src value of the
		// filename output defined above.
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(__dirname, 'public/index.html'),
		}),
	],
};
