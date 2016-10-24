## 《DOM 启蒙》读书笔记及测试代码

1. 节点概览
 1. 节点组成的树形层次结构
 2. [节点类型](./lib/nodeType.html)
 3. [节点继承](./lib/extendsFromNode.html)
 4. [继承而来节点打交道的属性和方法](./lib/nodePrototype.html)
 5. [节点类型名称和值](./lib/nodeInfo.html)
 	 1. `Node.prototype.nodeType`
 	 2. `Node.prototype.nodeName`
 	 3. `Node.prototype.nodeValue`
 6. [创建节点](./lib/createNode.html)
 	 1. `document.createElement`
 	 2. `document.createTextNode`
 	 3. `document.createComment`
 	 4. `document.createAttribute`
 	 5. `document.createDocumentFragment`
 7. [字符串和节点的转换](./lib/stringToNode.html)
     1. `Element.prototype.innerHTML`
     2. `Element.prototype.outerHTML`
     3. `Node.prototype.textContent`  
     4. `Element.prototype.insertAdjacentElement`
     5. `Element.prototype.insertAdjacentText`
     6. `Element.prototype.insertAdjacentHTML`
     7. `HTMLElement.prototype.innerText`
     8. `HTMLElement.prototype.outerText`
 8. [插入节点](./lib/addOrinsert.html)
     1. `Node.prototype.insertBefore`
     2. `Node.prototype.appendChild`
     3. `Element.prototype.before`
     4. `Element.prototype.after`
     5. `Element.prototype.append`
     6. `Element.prototype.prepend`
 9. [移除替换节点](./lib/removeOrReplace.html) 
     1. `Node.prototype.removeChild`
     2. `Node.prototype.replaceChild`
     3. `Element.prototype.remove`
     4. `Element.prototype.replace`
 10. [克隆节点](./lib/cloneNode.html) 
 	  1. `Node.prototype.cloneNode`
 11. [NodeList&HTMLCollection](./lib/nodeList.html)
     1. `length` 属性，因此可以是类数组对象
     2. 实时反映
     3. 默认情况下，顺序与树中的顺序一致 
 12. [遍历](./lib/bianli.js)
     1. 节点（包括了注释、文本节点）
     	 1. `Node.prototype.parentNode`
     	 2. `Node.prototype.firstNode`
     	 3. `Node.prototype.lastNode`
     	 4. `Node.prototype.nextSibling`
     	 5. `Node.prototype.perviosSibling`
     2. 元素
         1. `Element.prototype.fristElementChild`
         2. `Element.prototype.lastElementChild`
         3. `Element.prototype.nextElementChild`
         4. `Element.prototype.perviosElementChild`
         5. `Element.prototype.children`
         6. `Element.prototype.parentElement`
         7. `Element.prototype.previousElementSibling`
         8. `Element.prototype.nextElementSibling`
     3. `Element.prototype.childElementCount`
 13. [验证节点位置](./lib/containsAndCompare.html)
     1. `Node.prototype.contains`
     2. `Node.prototype.compareDocumentPosition`
 14. [比较节点](./lib/equalNode.html) 
     1. `Node.prototype.isEqualNode`
     2. `Node.prototype.isSameNode`
2. 文档节点
 1. `Object` <- `Node` <- `Document` <- `HTMLDocument`
 2. [属性和方法](./lib/documentAttr.html)
 3. 通用信息
     1. `title`
     2. `URL`
     3. `charset`
     4. `contentType`
     5. `compatMode` BackCompat（怪异模式）CSS1Compat（严格模式）
     6. `referrer`
     7. `lastModified`
     8. 等等
 4. 快捷访问
     1. `doctype`：现代浏览器不在 `document.childNodes` 中
     2. `head`
     3. `body` 
     4. `documentElement`：即 `<html lang="en">`
 5. [探测特性](./lib/hasFeature.html)
     1. `implementation.hasFeature`
 6. [获取激活节点](./lib/activeElement.html)   
 7. [是否聚焦在当前文档窗口上](./lib/hasFocus.html)
 8. [获取全局对象](./lib/defaultView.html)
 9. [获取 `document`](./lib/ownerDocument.html)
3. 元素节点
 1. [`HTML*Element`](./lib/HTMLElement.html) 
 2. 创建元素，上面的 `document.createElement`
 3. 标签名
     1. `Node.prototype.nodeName`
     2. `Element.prototype.tagName`
 4. [属性集合](./lib/attributes.html)
 5. [操作属性](./lib/handleAttributes.html)
     1. `Element.prototype.getAttribute`
     2. `Element.prototype.setAttribute`
     3. `Element.prototype.hasAttribute`
     4. `Element.prototype.removeAttribute`
     5. `Element.prototype.getAttributeNS`
     6. `Element.prototype.setAttributeNS`
     7. `Element.prototype.hasAttributeNS`
     8. `Element.prototype.removeAttributeNS`
     9. `Element.prototype.getAttributeNode`
     10. `Element.prototype.getAttributeNodeNS`
     11. `Element.prototype.setAttributeNode`
     12. `Element.prototype.setAttributeNodeNS`
     13. `Element.prototype.removeAttributeNode`
 6. [类操作](./lib/classList.html)
     1. `Element.prototype.className` 
     2. `Element.prototype.classList`
         1. `add`
         2. `remove`
         3. `toggle`
         4. `contains`
 7. [`data-*`属性](./data-xing.html) 
     1. `HTMLElement.prototype.dataset`
4. 选取元素节点
 1. [特定元素](./lib/specialNode.html)
     1. `Element.prototype.querySelector` 和 `document.querySelector`
     2. `document.getElementById`
 2. 节点列表
     1. `Element.prototype.querySelectorAll` 和 `document.querySelectorAll` 非实时的，下面三个是实时的。目前遇到的第一个非实时的获取方法。
     2. `Element.prototype.getElementsByTagName` 和 `document.getElementsByTagName`
     3. `Element.prototype.getElementsByTagNameNS` 和 `document.getElementsByTagNameNS`
     4. `Element.prototype.getElementsByClassName` 和 `document.getElementsByClassName`
     5. `document.getElementsByName`
 3. 子元素
     1. `Element.prototype.children` 实时、有序
 4. 预定义的节点列表
     1. `document.images`
     2. `document.embeds`
     3. `document.plugins`
     4. `document.links`
     5. `document.forms`
     6. `document.scripts`
     7. `document.anchors`
     8. `document.applets`
     9. `document.children`
     10. `document.styleSheets`
 5. [验证选取的元素](./lib/matchesSelector.html)
     1. `Element.prototype.matchesSelector` 针对不同浏览器加前缀
     2. `Element.prototype.webkitMatchesSelector`
     3. `Element.prototype.mozMatchesSelector`
     4. `Element.prototype.msMatchesSelector`
     5. `Element.prototype.oMatchesSelector`
     6. `Element.prototype.matches` 新的这个，不用加前缀
5. 元素节点几何量与滚动几何量
     1. CSSOM 视图模块规范中定义了访问和操作元素节点可视化表象的元素几何量、滚动几何量的属性和方法。
     2. [相对 `HTMLElement.prototype.offsetParent` 的位置](./lib/offsetParent.html)
       1. `HTMLElement.prototype.offsetLeft` 相对于自身 `offsetParent`
       2. `HTMLElement.prototype.offsetTop` 相对于 `offsetParent`
       3. `Element.prototype.clientTop` 相对于自身边框
       4. `Element.prototype.clientLeft` 相对于自身边框
       5. `Element.prototype.scrollTop` [滚动元素](./lib/scrollElement.html)
       6. `Element.prototype.scrollLeft` [滚动元素](./lib/scrollElement.html)
     3. [相对视区的偏移](./lib/getBoundingClientRect.html)
       1. `Element.prototype.getBoundingClientRect`
       2. `Element.prototype.getClientRects`
     4. [元素在视图中的尺寸](./lib/elementSize.html) 
       1. `HTMLElement.prototype.offsetHeight` 包括边框
       2. `HTMLElement.prototype.offsetWidth` 包括边框
       3. `Element.prototype.getBoundingClientRect().width` 包括边框
       4. `Element.prototype.getBoundingClientRect().height` 包括边框
       5. `Element.prototype.clientWidth` 不包括边框
       6. `Element.prototype.clientHeight` 不包括边框
       7. `Element.prototype.scrollWidth` [滚动元素](./lib/scrollElement.html)
       8. `Element.prototype.scrollHeight` [滚动元素](./lib/scrollElement.html)
       9. [彻底弄清楚几个宽高](https://m2mbob.cn/) 
     5. 特定点上最顶层元素
       1. `document.elementFromPoint`
     6. [滚动元素到视区](./scrollIntoView.html)
       1. `Element.prototype.scrollIntoView`
       2. `Element.prototype.scrollIntoViewIfNeeded`
6. 元素节点内联样式
 1. 获取[内联样式](./lib/elementStyle.html)
     1. `HTMLElement.prototype.style`  得到 `CSSStyleDeclaration`
 2. 设置[内联样式](./lib/elementStyle.html) 
     1. 直接通过 `style` 获得、设置、删除内联样式属性
     2. `style.setProperty`
     3. `style.getPropertyValue`
     4. `style.removeProperty`
 3. [所有内联样式](./lib/allElementStyle.html)
     1. `style.cssText`
     2. `Element.prototype.setAttribute`、`Element.prototype.getAttribute`、`Element.prototype.removeAttribute`
 4. 计算样式
     1. `window.getComputedStyle` 上面获得样式都是内联，不叠加计算的，这个方法返回的是叠加计算后的实际值。  
     2. `window.getComputedStyle` 得到的 `CSSStyleDeclaration` 是只读的。
7. 文本节点
     1. `Object` <- `Node` <- `CharacterData` <- `Text` 和元素混在一区的文本会转换为文本节点
     2. [文本节点属性和方法](./lib/textAttr.html)
     3. 创建节点
        1. 字符（包括空白符和回车符）会创建文本节点
        2. 编程式创建：`document.createTextNode`
     4. 节点值
        1. `Node.prototype.nodeValue`
        2. `Node.prototype.textContent` 会合并所有子文本节点
        3. `CharacterData.prototype.data`
        4. `Text.wholeText`
     5. [操作文本节点](./lib/handleNode.html)
        1. `CharacterData.prototype.appendData`
        2. `CharacterData.prototype.deleteData`
        3. `CharacterData.prototype.insertData`
        4. `CharacterData.prototype.replaceData`
        5. `CharacterData.prototype.substringData`
        6. `Comment` 也继承了 `CharacterData`，所以也拥有这些方法
     6. [多个兄弟文本节点](./lib/multiBrother.html) 
        1. 拿上面的例子来说，`strong` 元素把文本截断，所以得到的 `childNodes` 的 `length` 为 3。
        2. 另外也可以编程式地添加两个文本节点，而不会合并。
        3. `Node.prototype.normalize` 合并兄弟文本节点。
        4. [`Text.prototype.splitText` 分割文本节点](./lib/splitText.html)
     7. `Node.prototype.textContent`
        1. 合并返回所有子文本的内容
        2. 设置的时候会移除所有子节点，替换为新的 `Text` 节点
        3. `HTMLElement.prototype.innerText` 区别：
          1. `innerText` 认识 Css，忽略隐藏文本。
          2. `innerText` 关心 Css 触发重排。
          3. `innerText` 使文本规范化。
          4. `innerText` 非标准，新的火狐好像也支持了。
8. `DocumentFragment` 节点（文档片段）
 1. 空的文档模板，行为与实时 DOM 树相似，但是仅在内存中存在。 
 2. [创建文档片段节点](./createDocumentFragment.html)
     1. `document.createDocumentFragment`
     2. 与直接创建 div，然后创建 DOM 结构的区别：
         1. 文档片段可以包含任意节点（body、html 除外）。
         2. 文档片段插入 DOM 中时，自身不会添加，只插入子节点。
         3. 文档片段插入 DOM 中时实际上是把传输的内容放到了 DOM，自身的内容就没了。
         4. 在内存中创建节点注入到实时节点结构是极其高效的。
 3. 文档片段没有 `innerHTML` 属性，变通方法是新建一个 div，利用 div 的 `innerHTML`。
 4. 通过 `Node.prototype.cloneNode` 将文档片段保存在内存中。
9. Css 样式表和 Css 规则
 1. [样式概述](./lib/styleType.html)
     1. 元素内联样式
     2. `HTMLLinkElement` 外部样式类
     3. `HTMLStyleElement` 页面内联样式类
     4. `CSSStyleSheet` 样式表对象类
     5. `CSSStyleRule` 样式规则类
 2. 创建样式
     1. `document.createElement('style')`
     2. `document.createElement('link')`
 3. 获取所有样式表
     1. `document.styleSheets`（包括外部和内部）
     2. 实时、`length` 属性、类数组对象。
     3. 单个样式表用 `sheet` 属性从 `HTMLLinkElement` 或 `HTMLStyleElement` 获取
 4. [`CSSStyleSheet` 的属性和方法](./lib/styleSheetAttr.html)
 5. [`CSSStyleRule` 的属性和方法](./lib/styleRuleAttr.html)
 6. 修改样式规则
     1. `CSSStyleSheet` 的 `insertRule`、`deleteRule`、`addRule`、`removeRule` 方法。
     2. 直接通过 `CSSStyleRule.prototype.style` 进行修改。
 7. `CSSStyleSheet.prototype.disabled` 使样式表失效。
10. DOM 中的 JavaScript
 1. 脚本概述
     1. 元素内联脚本，`<a href="javascript:void(0)"></a>` 和 `<button onclick="alert('yo')"></button>` 等。
     2. `HTMLScriptElement` 页面内联脚本。
     3. `HTMLScriptElement` 外部脚本。
     4. 脚本元素内会新建一个文本节点，可以通过 `innerHTML`、`textContent`、`innerText` 来获取值。
 1. 同步加载和解析
     1. 如果加载和解析是异步的，那么 `document.write` 输出的位置根本无法确定，而如果在 `onload` 事件之后调用 `document.write` 会自动触发 `document.open` 清空页面，因此 Js 默认采用了同步地加载方式，它会阻塞页面的解析。现代浏览器是支持并发下载脚本的。
     2. 页面内联脚本也是如此，会同步执行，阻塞页面解析。
     3. 因此在同步加载的情况下，把 Js 脚本放到页面底部是比较好的策略。
 2. [异步加载脚本](https://m2mbob.cn/2016/10/06/js-tong-bu-yi-bu-jia-zai-xiao-jie/)
     1. 首先异步加载的脚本中出现，`document.write` 会报错。
     2. `defer` 异步加载、在 `DOMContentLoaded` 事件之前有序执行。低版本的 IE 支持。
     3. `async` 异步加载，加载完就执行，不利于依赖管理。IE 10 才支持，优先级高于 `defer`。
     4. 手动创建 `script` 标签实现异步加载（前端模块加载器如：seajs、requirejs 使用的都是这种方式）。
 3. `onload` 和 `onreadystatechange`
     1. 通常我们会为手动创建的 `script` 标签绑定一个加载完成的回调，在之后做一些操作，比如 seajs 会在加载完以后把 `script` 元素及其事件删除，防止内存泄漏，因为 seajs 已经把脚本的内容保存在模块对象上，供延迟调用了。
     2. 而对于 IE 8 及以下的浏览器，`Node` 不支持 `onload` 事件，所以使用 `onreadystatechange` 来代替。
 4. 获取当前执行的脚本
     1. `document.currentScript`
     2. IE 6-9 下没有，解决方案待查。
 5. 获取所有脚本
     1. `document.scripts`
11. DOM 事件
 1. 