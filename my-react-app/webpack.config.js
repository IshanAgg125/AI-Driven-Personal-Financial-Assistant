const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point of your application
  entry: './src/index.js',

  // Output configuration for your bundled files
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Module/rules for how to handle different file types
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Target js and jsx files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader to transpile the files
        },
      },
      // You can add more rules for other file types here (e.g., CSS, images)
    ],
  },

  // Plugins you want to apply to your build
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to your HTML template
    }),
    // Add more plugins as needed
  ],

  // Configuration for Webpack Dev Server (optional, for development)
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
  },

  // Detailed stats about child compilations
  stats: {
    children: true,
  },
};
