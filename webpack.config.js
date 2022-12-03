module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",

  entry: "./src/sketch.js",

  resolve: {
    // 拡張子を配列で指定
    extensions: [".js"],
  },
  devServer: {
    static: "dist",
    open: true,
  },
};
