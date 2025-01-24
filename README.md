本ソースは、WebAsemblyをJSから呼ぶ仕組みを試したものです。

呼出順序は以下の通り。
### 1. メニューからCounterページを開く(Counter.razorコンポーネント読込)
#### 1-1. OnAfterRenderAsyncメソッド発火
##### 1-1-1. jsファイル読込
##### 1-1-2. jsのaddHandlers関数実行
#### 1-2. addHandlers関数でbtnのidを持つ要素にclickイベントがバインドされる

### 2. [WebAsembly Execute]ボタンをクリックする
#### 2-1. jsのreturnArrayAsync関数が呼ばれる
##### 2-1-1. WebAsemblyのReturnArrayAsyncメソッドが呼ばれる
#### 2-2. razorコンポーネントのReturnArrayAsyncメソッドが実行されて、FromResultメソッドに渡した値が呼出元に渡される
#### 2-3. WebAsemblyのReturnArrayAsyncメソッドから返ってきた値がコンソールログに出力される
