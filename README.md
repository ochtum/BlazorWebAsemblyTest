<p align="left">
  <a href="README_en.md"><img src="https://img.shields.io/badge/English-blue.svg" alt="English"></a>
  <a href="README.md"><img src="https://img.shields.io/badge/日本語-red.svg" alt="日本語"></a>
</p>

本ソースは、WebAsemblyをJSから呼ぶ仕組みを試したものです。

呼出順序は以下の通り。
### 1. メニューからCounterページを開く(Counter.razorコンポーネント読込)
#### 1-1. OnAfterRenderAsyncメソッド発火
- jsファイル読込
- jsのaddHandlers関数実行
#### 1-2. addHandlers関数でbtnのidを持つ要素にclickイベントがバインドされる

### 2. [WebAsembly Execute]ボタンをクリックする
#### 2-1. jsのreturnArrayAsync関数が呼ばれる
- WebAsemblyのReturnArrayAsyncメソッドが呼ばれる
#### 2-2. razorコンポーネントのReturnArrayAsyncメソッドが実行されて、FromResultメソッドに渡した値が呼出元に渡される
#### 2-3. WebAsemblyのReturnArrayAsyncメソッドから返ってきた値がコンソールログに出力される
