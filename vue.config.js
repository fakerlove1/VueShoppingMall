const webpack = require('webpack')

module.exports = {

    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",

                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    },
    devServer: {
        // 项目运行时候的端口号
        port: 80
    }
}