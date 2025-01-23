export function returnArrayAsync() {
    // WebAsemblyのメソッド呼出
    DotNet.invokeMethodAsync('BlazorWebAsemblyTest.Client', 'ReturnArrayAsync')
        .then(data => {
            console.log(data);
        });
}

// razorコンポーネントから呼び出されるメソッド
export function addHandlers() {
    const btn = document.getElementById("btn");
    btn.addEventListener("click", returnArrayAsync);
}