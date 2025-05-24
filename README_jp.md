<p align="left">
  <a href="README.md"><img src="https://img.shields.io/badge/English-blue.svg" alt="English"></a>
  <a href="README_jp.md"><img src="https://img.shields.io/badge/日本語-red.svg" alt="日本語"></a>
</p>

本ソースは、WebAsembly を JS から呼ぶ仕組みを試したものです。

呼出順序は以下の通り。

### 1. メニューから Counter ページを開く(Counter.razor コンポーネント読込)

#### 1-1. OnAfterRenderAsync メソッド発火

- js ファイル読込
- js の addHandlers 関数実行

#### 1-2. addHandlers 関数で btn の id を持つ要素に click イベントがバインドされる

### 2. [WebAsembly Execute]ボタンをクリックする

#### 2-1. js の returnArrayAsync 関数が呼ばれる

- WebAsembly の ReturnArrayAsync メソッドが呼ばれる

#### 2-2. razor コンポーネントの ReturnArrayAsync メソッドが実行されて、FromResult メソッドに渡した値が呼出元に渡される

#### 2-3. WebAsembly の ReturnArrayAsync メソッドから返ってきた値がコンソールログに出力される
