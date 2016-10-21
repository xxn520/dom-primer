## 《DOM 启蒙》读书笔记及测试

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
 1. `Document` 和 `HTMLDocument`
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
     5. 特定点上最顶层元素
       1. `document.elementFromPoint`
     6. [滚动元素到视区](./scrollIntoView.html)
       1. `Element.prototype.scrollIntoView`
       2. `Element.prototype.scrollIntoViewIfNeeded`
     7. 获取文档/窗口大小 
       1. `document.body.offsetWidth`
       2. `document.body.offsetHeight`
       3. `document.body.clientWidth`
       4. `document.body.clientHeight`
       5. `document.body.scrollWidth` 文档的宽
       6. `document.body.scrollHeight` 文档的高
       7. `document.documentElement.offsetWidth`
       8. `document.documentElement.offsetHeight`
       9. `document.documentElement.clientWidth` 窗口的宽
       10. `document.documentElement.clientHeight` 窗口的高
       11. `document.documentElement.scrollWidth` 文档的宽
       12. `document.documentElement.scrollHeight` 文档的高
       13. 如果 scrollview 内的元素要比视口小，返回的就是视口的大小。 
    