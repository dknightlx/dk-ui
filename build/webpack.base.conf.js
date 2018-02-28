/*
 * @Author: 刘旭（DK） 
 * @Date: 2018-02-28 10:52:00 
 * @Last Modified by: 刘旭（DK）
 * @Last Modified time: 2018-02-28 14:01:41
 */
var path = require('path');
var webpack = require('webpack');
var config = require('../config');

module.exports = {
    entry: '',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: []
    }
}