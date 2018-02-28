/*
 * @Author: 刘旭（DK） 
 * @Date: 2018-02-27 14:24:54 
 * @Last Modified by: 刘旭（DK）
 * @Last Modified time: 2018-02-27 14:38:12
 */

var webpack = require('webpack');
var config = require('../config');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
    module: {
        rules: {}
    },
    devtool: '#cheap-module-source-map',
    plugins: []
})