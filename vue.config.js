module.exports = {
    configurewebpack: {
        resolve: {
            alias: {
                'assets': 'src/assets',
                'common': 'src/common',
                'components': 'src/components',
                'network': 'src/network',
                'views': 'src/views',
            }
        }
    }
    // resolve: {
    //     alias: {
    //         '@': resolve('src'),
    //         'assets': resolve('src/assets'),
    //         'common': resolve('src/common'),
    //         'components': resolve('src/components'),
    //         'network': resolve('src/network'),
    //         'views': resolve('src/views'),
    //     }
    // }
}