### `currentScript` 的兼容方案

在前面的 seajs 源码注释中漏掉了 `currentScript` 部分的说明，因为当时也没有看明白，现在回过头来研究这个问题。

#### 属性简介

Chrome 和 Firefox 上都提供了 `document.currentScript`，用来获取当前正在执行的 script 元素。基本在每一个前端模块加载器中都会用到这个，例如在 seajs 当中，对于 `define` 匿名模块来说，它会从 `currentScript.src` 中获取匿名模块的 uri。

但是 IE11 以下都不支持 `document.currentScript` 属性，而我们目前基本是需要兼容 IE8 的，所以要提供兼容的方案。另外，针对低版本的 chrome、fireFox 有必要的话也需要做一些兼容性的处理。

下面提供 mdn 关于 `document.currentScript` 以及 `node.readyState` 的兼容性，下面会用到。

> 在异步代码如 `setTimeout` 等中获取 `document.currentScript` 同样是会失败的，因为异步的代码是在当前这个 `script` 代码出栈以后才执行的，这个需要注意，但是不是本文的关注点。

#### 方案一：兼容 IE 11 以下

```
function getCurrentScript(){
	 // 如果支持 currentScript 则直接返回
    if(document.currentScript){
        return document.currentScript.src
    }
    // 否则的话遍历所有 head 中的 script 标签
    // 根据 readyState 状态来判断哪个 script 正在执行
    var scripts = head.getElementsByTagName("script")
    for (var i = 0, script; script = scripts[i++];) {
        if (script.readyState === "interactive") {
            return script.src
        }
    }
}
```

#### 方案二：兼容 IE 以及旧版的 chrome、fireFox

```
function getCurrentScript() {
  	// 如果支持 currentScript 则直接返回
   	if(document.currentScript) { //firefox 4+
      	return document.currentScript.src
  	}
  	var stack, e, i, scripts;
  	// 参考 https://github.com/samyk/jiagra/blob/master/jiagra.js
  	try {
      	a.b.c(); // 强制报错,以便捕获e.stack
  	} catch(e) {
      	stack = e.stack
  	}
  	if(stack) {
      	// chrome IE10 使用 at, firefox opera 使用 @
      	e = stack.indexOf(' at ') !== -1 ? ' at ' : '@'
      	// 从错误栈中获取当前 script 的地址
      	i = stack.lastIndexOf(e)
      	return stack.slice(i+e.length).replace(/\s\s*$/,"").replace(/(:\d+)?:\d+$/i,"")
  	}
  	// 如果 a.b.c(); 奇迹般地存在没有报错，那么退回第一种方案
  	// 否则的话遍历所有 head 中的 script 标签
    // 根据 readyState 状态来判断哪个 script 正在执行
  	scripts = document.head.getElementsByTagName("script")
  	for (i = 0, script; script = scripts[i++];) {
        if (script.readyState === "interactive") {
            return script.src
        }
    }
}
```

#### 小结

上面的两个方案提供了解决这个问题的两种思路，一是利用 `script` 元素的 `readyState` 来获取，二是利用错误栈的信息来获取（十分巧妙），不过要考虑各种浏览器的错误栈的格式比较烦。

低版本的 chrome、fireFox 已经基本见不到了，所以第一种方案在大多数场景下已经足够用了，seajs 就使用的是类似第一种的方案。

如果有需求要兼容低版本的 chrome、fireFox，那么必须使用第二种思路，因为在 chrome、fireFox 下是没有 `readyState` 的，所以低版本的 chrome、fireFox 只能够使用第二种方案来进行兼容。