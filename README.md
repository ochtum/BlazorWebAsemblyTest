<p align="left">
  <a href="README.md"><img src="https://img.shields.io/badge/English-blue.svg" alt="English"></a>
  <a href="README_jp.md"><img src="https://img.shields.io/badge/日本語-red.svg" alt="日本語"></a>
</p>

This source code is an experiment in calling WebAssembly from JavaScript.

The call sequence is as follows:

### 1. Open the Counter page from the menu (loads the Counter.razor component)

#### 1-1. The OnAfterRenderAsync method is triggered

- The JavaScript file is loaded.
- The addHandlers function in JavaScript is executed.

#### 1-2. In the addHandlers function, a click event is bound to the element with the btn ID.

### 2. Click the [WebAssembly Execute] button

#### 2-1. The returnArrayAsync function in JavaScript is called.

- The ReturnArrayAsync method in WebAssembly is invoked.

#### 2-2. The ReturnArrayAsync method in the Razor component is executed, and the value passed to the FromResult method is returned to the caller.

#### 2-3. The value returned by the ReturnArrayAsync method in WebAssembly is output to the console log.
