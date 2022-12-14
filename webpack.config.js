const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      index: './src/index.js',
      mainPage: './src/mainPage.js',
      categoryTypeList: './src/categoryTypeList.js',
      mainDataStorage: './src/mainDataStorage.js',
      renderProjectTree: './src/renderProjectsTree.js',
      renderTaskInput: './src/renderTaskInput.js',
      renderTaskList: './src/renderTaskList.js',
      inputCollector: './src/inputCollector.js',
      taskManager: './src/taskManager.js',
      renderFromArray: './src/renderFromArray.js',
      projectFactory: './src/projectFactory.js',
      workFlowController: './src/workFlowController.js',
      taskFactory: './src/taskFactory.js',
      taskControler: './src/taskControler.js',
      expirationControll: './src/expirationControll.js'
  },
  devtool: 'inline-source-map',
  plugins: [
      new HtmlWebpackPlugin({
          title:'To do',
      })
  ],
  output: {
    filename: '[name]bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
          {
              test: /\.css$/i,
              use:['style-loader', 'css-loader']
          }
      ]
  }
};
