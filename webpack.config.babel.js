import path from 'path';
import webpack from 'webpack';

export default {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /^\$legacy\/.*\.js$/,
        include: path.resolve(__dirname, 'legacy')
      },
      {
        test: path.resolve(__dirname, 'legacy/legacy'),
        use: 'exports-loader?LegacyLog=Log'
      }
    ]
  },
  resolve: {
    alias: {
      $legacy: path.resolve(__dirname, 'legacy')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      d3: 'd3'
    })
  ]
};
