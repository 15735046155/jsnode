##方法
*getComputedStyle(要获取的元素名称)
>结果是字符串 35px
##属性
*获取当前元素的宽度高度（加上margin和padding， 除非设置box-sizing，或者是display：none）
>offsetWidth
>offsetHeight

*当所有前辈都没有定位属性的时候，以下两方法都是相对文档的距离，如果两种方法的前辈有定位，则以下两种都是相对于有定位的前辈的距离，并且会选择就近原则。设置display的时候，距离就位0。
>offsetLeft、offsetTop

*一个元素的 scrollTop 值是这个元素的顶部到它的最顶部可见内容（的顶部）的距离的度量。
>scrollTop 、scrollLeft

*当前的浏览器窗口距离顶部的距离
>document.documentElement.scrollTop

*浏览器的宽高获取的两种方式
>window.innerWidth    window.innerHeight
>document.documentElement.clientWidth     document.documentElement.clientHeight

##事件
*onsrcoll 事件  
>当元素或者浏览器窗口滚动时发生的事件,根据固定的事件监测  有滚动条的元素中的子元素相对没有滚动条的元素所超出的距离。