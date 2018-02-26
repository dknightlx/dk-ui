/*
 * @Author: 刘旭（DK） 
 * @Date: 2018-02-26 17:04:47 
 * @Last Modified by: 刘旭（DK）
 * @Last Modified time: 2018-02-26 17:35:38
 */

module.exports = {
    rootDir: '.',
    srcDir: 'examples',
    dev: true,
    port: 5000,
    // 将生成的文件指向当前目录下 dist, 需要添加到 .gitignore
    generate: {
        dir: 'dist/examples'
    },

    // router: {
    //     base: process.env.BASE_PATH
    // },
    build: {
        postcss: [
            require('autoprefixer')({
                browsers: ['last 3 versions']
            })
        ],
        loaders: [
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                query: {
                    limit: 10000, // 10K
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000, // 10K
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(js|vue)$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                exclude: /(node_modules|.nuxt)/,
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            }
        ]
    }
}