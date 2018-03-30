#DOM
>文档对象模型
>作用：提供了用js操作页面当中的标签、属性、样式、内容的能力
##操作页面
*document对象下获取元素对象或者获取标签对象
    *querySelector()
    *querySelectorAll()
*如何获取元素对象或者说获取标签对象的的方法
    *document.querySelector()
    *document.querySelectorAll()
*元素对象的属性
    *tagName和nodeName  获取标签名例如 p标签、span 标签（结果是大写）,而不是获取标签的类名
    *innerHTML 获取或者设置标签的内容
    *className  获取或者设置标签的类名
    *id  获取或者设置标签的id
    *classList  获取标签的类名集合对象
        *add() 添加某个类名
        *remove()  移除某个类名``
    *style   获取标签的行内样式得集合
        *div.style.width 获取或者设置某一个行内样式
    *getComputedStyle  获取一个不是行内样式的css属性
*元素对象的事件
    *onclick  鼠标单击事件
    *onmouseenter  鼠标进入事件
    *onmouseleave  鼠标离开事件
    *transitionend  过渡结束事件
*元素对象的方法
    *addEventlistener(事件类型，事件处理程序（就是一个函数）)  添加事件监听
    *querySelector()
    *querySelectorAll()
    
