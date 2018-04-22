const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [{ loader: 'file-loader', options: { outputPath: 'assets' } }],
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' })
    ],
    mode: 'development',
}
