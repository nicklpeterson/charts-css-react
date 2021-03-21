const path = require('path');
const nodeExternals = require('webpack-node-externals');
const pkg = require('./package.json');

const bundles = {
    'Bar': {
        title: 'Bar',
        entryPoint: './Bar.js'
    }
}

const configs = Object.keys(bundles).map(bundle => {
    return {
        context: path.join(__dirname, '/src'),
        entry: {
            [bundle]: bundles[bundle].entryPoint
        },
        output: {
            path: path.join(__dirname, `/dist`),
            filename: `./[name].js`,
            library: pkg.name,
            libraryTarget: "umd"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.(css|scss|sass)$/,
                    use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        target: 'node',
        externals: [nodeExternals()]
    }
});

module.exports = (env, options) => {
    configs.forEach((config) => {
        if (options.mode === 'production') {

        }
        else {
            config.devtool = 'source-map';
        }
    });

    return configs;
};