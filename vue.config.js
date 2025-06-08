process.env.VUE_APP_VERSION = process.env.npm_package_version;

module.exports = {
    productionSourceMap: false,
    outputDir: './dist/',
    assetsDir: 'public',
    publicPath: '',
    // eslint-disable-next-line no-undef
    pages: {"index":{"entry":"src/_front/main.js","template":"public/front.html","filename":"./index.html","lang":"pt","title":"Softhaus — Desenvolvimento Ágil e Inteligente","cacheVersion":3,"meta":[{"name":"title","content":"Softhaus — Desenvolvimento Ágil e Inteligente"},{"name":"description","content":"Criamos sistemas sob medida com agilidade, inteligência e tecnologia low-code. Lançamos produtos prontos para escalar."},{"name":"image","content":"/public/images/00f67f34-609b-4e28-b979-b314915e6b30.jpeg?_wwcv=3"},{"itemprop":"name","content":"Softhaus — Desenvolvimento Ágil e Inteligente"},{"itemprop":"description","content":"Criamos sistemas sob medida com agilidade, inteligência e tecnologia low-code. Lançamos produtos prontos para escalar."},{"itemprop":"image","content":"/public/images/00f67f34-609b-4e28-b979-b314915e6b30.jpeg?_wwcv=3"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Softhaus — Desenvolvimento Ágil e Inteligente"},{"name":"twitter:description","content":"Criamos sistemas sob medida com agilidade, inteligência e tecnologia low-code. Lançamos produtos prontos para escalar."},{"name":"twitter:image","content":"/public/images/00f67f34-609b-4e28-b979-b314915e6b30.jpeg?_wwcv=3"},{"property":"og:title","content":"Softhaus — Desenvolvimento Ágil e Inteligente"},{"property":"og:description","content":"Criamos sistemas sob medida com agilidade, inteligência e tecnologia low-code. Lançamos produtos prontos para escalar."},{"property":"og:image","content":"/public/images/00f67f34-609b-4e28-b979-b314915e6b30.jpeg?_wwcv=3"},{"property":"og:site_name","content":"Softhaus — Desenvolvimento Ágil e Inteligente"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"<style>\nbody {\n    scrollbar-color: rgba(44, 45, 58, 0.50);\n}\n\n::-webkit-scrollbar {\n    height: 8px;\n    width: 8px;\n    background: none;\n}\n\n::-webkit-scrollbar-thumb {\n    background: rgba(44, 45, 58, 0.50);\n    -webkit-border-radius: 1ex;\n    -webkit-box-shadow: none;\n}\n\n::-webkit-scrollbar-corner {\n    background: none;\n}\n\n</style>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://0789ebc3-5a15-47b5-afa8-e08f4e15669f.weweb-preview.io/"},{"rel":"alternate","hreflang":"pt","href":"https://0789ebc3-5a15-47b5-afa8-e08f4e15669f.weweb-preview.io/"}],"chunks":["chunk-vendors","chunk-common","index"]}},
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
