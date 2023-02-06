const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
        config.module
        .rule('vue')
        .use('vue-loader')
        .tap(options => ({
            ...options,
            isCustomElement: tagName => {
                return tagName === 'vue-advanced-chat' || tagName === 'emoji-picker'
            }
        }))
    }
})
