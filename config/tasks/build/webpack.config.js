const Encore = require("@symfony/webpack-encore");

Encore.setOutputPath("public/build/")
    .setPublicPath("/public/build/")
    .addEntry("index", "./assets/js/index.js")
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableReactPreset()
    .configureBabel((babelConfig) => {
        babelConfig.plugins.push("@babel/plugin-proposal-class-properties");
    });

const config = Encore.getWebpackConfig();
config.node = { fs: "empty" };

module.exports = config;
