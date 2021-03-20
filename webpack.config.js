module.exports = {
    mode: 'production',
    entry: [
      './src'
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /(\.(scss|css)$)/,  
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    externals: {
      react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react'
      },
      'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom'
      }
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/lib',
      publicPath: '/',
      filename: 'index.js',
      libraryTarget: 'commonjs'
    }
  };