process.env.VUE_APP_VERSION = process.env.npm_package_version;

module.exports = {
    productionSourceMap: false,
    outputDir: './dist/',
    assetsDir: 'public',
    publicPath: '',
    // eslint-disable-next-line no-undef
    pages: {"index":{"entry":"src/_front/main.js","template":"public/front.html","filename":"./index.html","lang":"pt","cacheVersion":1,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\nbody {\n    scrollbar-color: rgba(44, 45, 58, 0.50);\n}\n\n::-webkit-scrollbar {\n    height: 8px;\n    width: 8px;\n    background: none;\n}\n\n::-webkit-scrollbar-thumb {\n    background: rgba(44, 45, 58, 0.50);\n    -webkit-border-radius: 1ex;\n    -webkit-box-shadow: none;\n}\n\n::-webkit-scrollbar-corner {\n    background: none;\n}\n\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://0789ebc3-5a15-47b5-afa8-e08f4e15669f.weweb-preview.io/"},{"rel":"alternate","hreflang":"pt","href":"https://0789ebc3-5a15-47b5-afa8-e08f4e15669f.weweb-preview.io/"}],"chunks":["chunk-vendors","chunk-common","index"]}},
    configureWebpack: config => {
        config.module.rules.push({
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
        });
        config.performance = {
            hints: false,
        };
    },
};
