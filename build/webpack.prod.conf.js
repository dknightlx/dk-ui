/*
 * @Author: 刘旭（DK） 
 * @Date: 2018-02-28 14:08:26 
 * @Last Modified by:   刘旭（DK） 
 * @Last Modified time: 2018-02-28 14:08:26 
 */
var webpack = require('webpack');
var config = require('../config');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
    module: {
        rules: {}
    },
    devtool: '#source-map',
    plugins: []
})