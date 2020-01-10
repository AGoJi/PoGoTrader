module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: "https://pogoapi.net/api/v1/"
  }
};
