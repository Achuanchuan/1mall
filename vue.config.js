const webpack = require("webpack");
const resolve = dir => path.join(__dirname, dir);
const path = require("path");
module.exports = {
  chainWebpack: config => {
    config.resolve.symlinks(true);
    config
      .plugin("ignore")
      .use(
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn$/)
      );
    config.resolve.alias
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"))
      .set("@router", resolve("src/router"))
      .set("@store", resolve("src/store"))
      .set("@network", resolve("src/network"))
      .set("@utils", resolve("src/utils"))
      .set("@views", resolve("src/views"));
  }
};
