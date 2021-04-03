module.exports = {
  mode: 'development',
  devtool: 'inline-source-map', // ソースマップ。デバッグの際に、/src/component/test.jsを参照
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'sample.js'
  },
  watch: true, // ファイル編集時に、都度でバンドルを自動で実行
  watchOptions: {
    ignored: /node_modules/ // 複数ある場合は、['files/**/*.js', 'node_modules']みたいに配列で指定できる
  }
}
// __dirnameについて
// Node.jsで予め用意されている変数で、記述されたファイルのパスが格納されている
// webpack.config.jsが、C:/hoge/sample/webpack.config.jsにある場合、
// C:/hoge/sampleが返ってくる。
// entryは設定ファイルからの相対パスだが、outputは絶対パスを指定する必要があるため、__dirnameを利用する

// やってる事↓
// IN: ./src/index.js → OUT: ./dist/sample.js
