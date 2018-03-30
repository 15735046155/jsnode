# js笔记

安装webstorm

HTML是超文本标记语言（hyper text markup language）

## 一、标记/标签：

- ​	块标签：div 、 h1-h6、  p 、 pre、ul、li、 ol dl  dt  dd  header  footer section main  vidio audio  form



- ​	行标签：a(target替换还是打开新的页面)  span 、i、em   strong  time  address  prigess表示进度



- ​	行内块级标签img :（src  alt  width  hight  boder）、input、textarea 、select、option、fieldset



- ​	实体：&nbsp；&lt；&gt；&map；和 &    、 &quote；引号 “


## 二、表单

### 	form（action提交的地址  、  method:get/post)

​		table-layout：fixed；固定每个单元格的大小

​		border-collapse：collapse；

​		word-break: break-all;自动换行

​		colspan="3"合并三列

​		rowspan="2"合并俩行

​		<caption>xxx表</caption>标题

### 	表单控件

​			input{password  text  radio  checkbox   file  hidden  submit  botton  reset }

​			(新增  email  url   date  week  month  time  datetime-local  number  range:滑块的展示效果  search  color)

​			属性( type name  value  readOnly   disable  checked  selected maxlength )(require  pleaceholder)

## 三、css回顾

### 1.选择器 

- 标签选择器 div   body  a
- 类名选择器   .one
- id选择器      #one
- 后代选择器  .one .two   ul li
- 群组选择器  .one,.two
- 交叉选择器   ul.one  .one.two
- UI伪类选择器  :link   、   :hover（鼠标经过 ）、:active 、 :visited（鼠标点过）
- 子选择器       div>a  .one>.two
- 同级选择器   div+p（选择p标签紧挨着div） div~p（选择p标签在div里）
- :nth-child(2) （父元素里第几个）可以结合变量     n:first-child（父元素里第一个）
  :last-child （父元素里最后一个）                            :nth-last-child()（父元素里倒数第几个）
  :only-child（父元素里唯一的）
- :nth-of-type(2)（同类型的第几个）                         :first-of-type
  :last-of-type                                                                :nth-last-of-type()
  :only-of-type
- 属性选择器[data]（data）data=aa（开始）[data$=aa]（结束）[data*=aa]
- :before    :after
- :checked    （被选中）
- :target    :root

### 2.属性

-  布局：		

width宽     hight高     margin元素间距    padding内容和边框的距离     float浮动    position定位，有四个（相对定位、绝对定位、固定定位、默认定位） left   right   top  bottom   z-index层级关系设置     box-sizing以特定的方式定义匹配某个区域的特定元素，默认值是content-box.   display块元素、行内元素、行内块元素十七可以相互具有本身没有的功能，可以设置容器，隐藏三个功能。

-  样式		

  背景：background  background-color设置背景颜色   background-image设置背景图片  background-position背景位置   background-repeat 背景图不重复  background-attachment背景图是否固定    background-clip背景绘画区域    background-origin背景绘画起始点      background-size设置大小   

边框  border   border-width边框宽     border-color边框颜色     border-style边框的样式        box-shadow（可以重复设值，盒子的阴影           box-shadow: 0 0 10px 20px #000, 0 0 10px 20px blue;）   border-radius ：border-radius: 10px 20px 30px 40px/20px 30px 40px 50px;      /* 左上角横轴10px，纵轴20px,右上角横轴20px，纵轴30px，左下角横轴30px，纵轴40px，右左下角横轴40px，纵轴50px */  ）  outline和border一样的写法，不占盒子大小，在border外边      outline-offset偏移，即往外扩展

- 渐变			

线性渐变linear-gradient（）     repeating-linear-gradient（）   径向渐变 radial--gradient（）    repeating-radial-gradient（）  

- 文字			

work-break文字自动换行    letter-spacing字间距    vertical-align设置垂直方向对齐方式    text-indent首字缩进

- 动画	

设置动画的方式

1.transition设置过度属性  

​	   transition-property定义过度属性的名字    transition-duration定义过度持续时间      transition-timing-function动画函数    transition-delay动画的延迟

2.@keyframe     

​	用@keyframes设置的动画的俩个方法

		/* 方法1*/
	    @keyframes rotate{
			0%{
				transform:rotate(0deg);
			}
			100%{
				transform:rotate(360deg);
			}
		}
		/*方法2*/
		@keyframes rotate{
			from{
				transform: rotate(0deg);
			}
			to{
				transform: rotate(360deg);
			}

​	 animation设置动画属性    

			animation-duration: 5s;
			animation-timing-function: linear;
			animation-delay: 2s;
			animation-iteration-count: infinite;/*无线循环*/
			animation-direction: alternate;/*正反旋转*/
			animation-fill-mode: forwards;/*旋转完成后停留在动画结束的位置*/
- 转换

 2D3D转换属性 

transform     transform-orign允许你改变被转化元素的位置      transform-style规定被转换元素如何在3D空间中展示       perspective规定3D元素的透视效果       perspective-orign规定3D元素的底部位置

 2D转换方法

translate     translateX             translateY             translateZ      translate3d（）平移

rotate（）        rotateX（）    rotateY（）    rotateZ（）    rotate3d（）旋转

scale（）     scaleX（）   scaleY（）       skew（）      skewX（）  skewY（）放大缩小

matrix（）矩阵	  

### 3.引用方式

- 行内样式 style="width:100px;height:100px;"
- 嵌入样式 <style>.one{width:100px;height:100px;};</style>
- 外部样式 <link rel='stylesheet' href="">
- 引入样式 @import url("demo.css");   @import  "demo.css"


## 四、响应式

xs   超小屏   手机     手机的阀值一般为600-700 

sm   小屏

md   中屏

lg     大屏



container  内容除了超小屏外。其他的都有固定的宽度。

container-fluid   内容在任何情况下等比例缩放。

ctrl+alt+l    格式化代码

offset  偏移

## 五、三层结构

结构层	HTML      超文本标记语言

表现层	css

行为层	JavaScript

## 六、JS定义

​	一门可以运行在浏览器中的计算机脚本语言

## 七、用来做什么

- 完成一些表单的验证
- 制作一些网页效果
- 对于网页内容进行读写
- 进行一些数据的操作
- 开发网页游戏（有限制的）
- 开发网页应用（例如网页版的PS软件）
- 进行后台开发（Node.js）

## 八、JavaScript的发展历史

- 1995年    网景公司   布兰登艾奇  开发的  liveScript   和Sun公司合作改名为JavaScript，
- 1995年   IE 用的是  Jscript脚本语言
- 1996年  网景公司 和其他公司合作把JavaScript脚本提交到ECMA      ECMA主要是制作计算机行业标准的组织
- 1997年  用于浏览器标准的脚本语言推出   叫ECMA Script 1.0
- 1998年  ECMA Script 2.0推出
- 1999年  ECMA Script 3.0推出
- 2005年  ECMA Script 4.0（没有正式推出） ECMA Script 3.1对3版本进行微调
- 2010年  ECMA Script 5.0
- 2014年  ECMA Script 6.0    更名叫做 ECMA Script 2015
- ECMA Script  2017

## 九、JavaScript组成

- ECMA   JavaScript的核心语法  （变量   函数  数组   数据类型   流程控制  对象... ）
- BOM   Browser  Object   Model    浏览器对象模型   （如何用js控制浏览器）
- DOM   Document   Object   Model   文档对象模型    （如何用js控制文档）


## 十、js的语法特点

基于对象和事件驱动的解释型松散型语言

## 十一、JavaScript引用方式

- 标签内部使用	

  <!-- 连接方式 -->1.连接   2.重定向 

  	<!-- 链接 -->
  	<!-- <a href="javascript:alert(1)">连接</a> -->
  	<!-- 重定向方式 -->
  	<!-- 
  		<form action="alert(2)">
  			<input type="submit" >
  		</form>
  	-->

- 在事件的后边  <div onclick="alert(3)"></div>

- 嵌入方式 

    <script>		
    		alert(4);（内容）
    	</script>

- 引入方式  src

  注意： 用于引入的script标签是不能再插入其他内容的

  ​	    采用不同的方式引入的js代码最终还是在一起执行的，所以互相之间还是有联系的。

## JavaScript的语法

#### 1.JavaScript变量：

- 定义：存储数据的容器


- 声明变量用  ：var（关键字）                 例如  var   变量名


- 给变量进行赋值：1.在声明的同时进行赋值                 var     变量名=值；

  ​		   	       2.先声明，后赋值。              var    变量名；     变量名=值；

  ​		               3.一次性声明多个变量，然后赋值    

  	var name,sex,age;
  	name="张三";
  	sex="女";
  ​		  	       4.一次性声明多个变量的同时进行赋值                var name=1,sex=2;

-  ES6中  新增变量的声明方式   let
-  ES6中  新增常量的声明方式   const           const c=3;只有这一种声明方法，声明且赋值。常量中都是大写。
- 声明覆盖的问题
  1. 变量值是可以进行重新赋值的，常量值是不可以的。
  2. var是可以重新声明的，let和const是不可以的。
  3. 不使用任何关键字声明      直接给变量赋值不会报错。


- 变量命名的规范

  1. 变量命名严格区分大小写

  2. 变量名的开始必须是字母、下划线、$         这三者后续可以跟字母、数字、下划线、dollar符号

  3. 不能使用关键字和保留字作为变量名

  4. 变量名一定要有意义

  5. js当中的命名习惯   长单词用驼峰命名法    短单词用首字母大写

     *getElementByClassName                          *Date()


#### 2.JavaScript数据类型

- **数值  Number**                  整数、小数、正数、负数、1e+2、十六进制0x、八进制0o、二进制0b
- **字符串类型**   String          用双引号或者单引号包裹内容，内容不可以换行              ES6中用英文下的反引号包裹``1旁边的键，内容中可以换行，反引号是模板字符串       引号嵌套的问题：单引号和双引号可以互相嵌套，但是双引号中不可以嵌套双引号，单引号中不可以嵌套单引号，反引号里边可以嵌套单引号和双引号。
- **布尔值  Boolean**             只有两个值：true和false
- **undefined **                      只有一个值undefined , 是js中特有的一个值，在某些情况下变量没有被赋值，变量就会被自动赋值为undefined.
- **空值 null**                            一个占位符，表示空，一般用于解除对象的引用
- **Symbol    类型**                 ES6中新增的数据类型
- **对象object**                       函数、数组。。           格式var  sl=Symbol();

#### 3.数据类型的划分

- **初始类型**             数值、字符串、布尔值、null、undefined、Symbol

- **引用类型**             对象

  *代码在运行的时候数据都是保存在计算机内存当中的

  *内存当中是分为：栈区、堆区

  ​	栈区一般保存的长度固定的值，所占空间少，读取速度快

  ​	堆区一般保存的是长度可变的值，所占空间比较大，访问速度较慢

  *初始类型都是在栈区保存的

  *引用类型都是在堆区中保存的，只在栈区中保存一个引用地址。

  **typeof   用来判断变量的类型         使用方法typeof   变量名        typeof   null后的值为object**

#### 4.运算符

**1.算数运算符**        +   -   *   /   %   ++    --                                  输出语句    console.log(变量或者直接写值) ，在检查控制台看结果，清楚控制台结果用ctrl+l            %取余数           ++放在前边是先自增在赋值，放在后边是先赋值后自增

- 还可以用来连接字符串，只要加号两边有一个是字符串，最终的结果就是两个拼接之后的字符串。


- 如果字符串中全是数值，也可以进行除了+之外的算数运算。例如console.log(“10”-5)；或者console.log(“10”-“5”)   结果都是5
- 在算数运算中如果得不到最终的结果，会得到一个NaN（not    a  number）例如aaa-5结果就是NaN。

**2.关系运算符（比较运算符）**

- 结果是布尔值    

-  ==          ===（全等：真正的相等）   >    <     >=      <=          !=(不等于)        !==（不全等于）

- 其他类型的比较

  *数值和由数值组成的字符串是可以比较的，数值和字符串比较结果是false    

  *==   只比较数值是否相等     ===不仅比较数值相等，还要比较数值类型是否相同。

  *字符串和字符串比较是从第一位开始， 依次比较字母所对应ASCII码的大小（小写字母从97开始的   97  a）

**3.赋值运算符**

- =     +=      -=      *=      /=     %=   把等号右边的值赋值给等号左边的值     num3+=5 和 num3=num3+5      其他同理

**4逻辑运算符**

-   && 与运算  并且                                  ||   或运算   或者                               ！  非运算    排除

  *对于布尔值进行运算

  ​	与运算：同真则真，同假则假，一假全假。

  ​	或运算；有真则真

  ​	非运算：真值变为假值，假值变为真值

  *对于其他类型的值进行运算

  ​	假值有：数字0、空字符串“”、NAN、undefined、null、false

  *与运算

  ​	|值1|值2|结果|

  ​	|真值1|真值2|真值2|

  ​	|假值1|假值2|假值1|

  ​	|真值|假值|假值|

  *或运算

  ​	|真值1|真值2|真值1|

  ​	|假值1|假值2|假值2|

  ​	|真值|假值|真值|

**5.一元运算符**

typeof    +(正号)        - （负号）    new、delete（对对象进行处理）             加减乘除是二元运算符

**6.三元运算符（三元表达式）**

格式：关系运算表达式？当表达式为真的时候的值：当表达式为假的时候的值     例如：var  result=grade>=60?"成功"：“失败”      关系运算表达式可以被替换为任意一个表达式

表达式-----本身就是一个值或者是可以用来 求值的代码

**7.特殊运算符**

（）作用：提升算数优先级、调用函数





