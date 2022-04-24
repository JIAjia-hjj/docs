---
title: 很长的文章啊
---

# 很长的文章啊
## 一、CSS

### **1、移动端1px 解决方案**

### **2、opacity_visibility_display优劣**

+ **display：none;**
  + DOM 结构：不渲染、不占据空间
  + 事件监听：不能DOM 事件监听
  + 性能：引起重排，性能较差
  + 继承：不会被子元素继承
  + transition 不支持 display
+ **visibility: hidden;**
  + DOM 结构：渲染、占据空间
  + 事件监听：不能DOM 事件监听
  + 性能：引起重绘，性能较高；
  + 继承：会被子元素继承，子元素可以通过设置 visibility: visible; 来取消隐藏
  + transition：visibility 会立即显示，隐藏时会延时
+ **opacity: 0;**
  + DOM 结构：隐藏、占据空间
  + 事件监听：能DOM 事件监听
  + 性能：提升为合成层，不会触发重绘，性能较高；
  + 继承：会被子元素继承,且子元素并不能通过 opacity: 1 来取消隐藏；
  + transition：opacity 可以延时显示和隐藏

### **3、盒模型介绍**

- `box-sizing: content-box` ：标准盒模型（默认值），只包含 `content`。
- `box-sizing: border-box` ：IE（替代）盒模型，content + padding + border。

### **4、css 选择器和优先级**

 优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下：

- 如果存在内联样式，那么 `A = 1`，否则 `A = 0` ；
- B 的值等于 `ID选择器（#id）` 出现的次数；
- C 的值等于 `类选择器（.class）` 和 `属性选择器（a[href="https://example.org"]）` 和 `伪类（:first-child）` 出现的总次数；
- D 的值等于 `标签选择器（h1,a,div）` 和 `伪元素（::before,::after）` 出现的总次数。

从左至右比较，如果是样式优先级相等，取后面出现的样式。

### 5、flex



### 6、line-height 如何继承？

- 父元素的 `line-height` 写了**具体数值**，比如 `30px`，则子元素 `line-height` 继承该值。
- 父元素的 `line-height` 写了**比例**，比如 `1.5 或 2`，则子元素 `line-height` 也是继承该比例。
- 父元素的 `line-height` 写了**百分比**，比如 `200%`，则子元素 `line-height` 继承的是父元素 `font-size * 200%` 计算出来的值。

### 7、水平垂直居中

### 8、文档流

+ 定位流

+ 浮动流

+ 普通流

  

### 9、BFC的形成和作用

+ BFC直译为"**块级格式化上下文**"。页面上的一个隔离的渲染区域，容器里面的子元素不会在布局上影响到外面的元素，反之也是如此。
+ （一打开页面body就会创建出渲染的区域，这个渲染区域就是块级格式上下文。就是一个页面中划分的区域，专门按块级格式上下文的渲染方式，去渲染，这就是块级格式的渲染规则在里面起作用。）
+ 如何产生BFC？
  + 根元素，即HTML标签
  + float的值不为none。 
  + overflow的值不为visible。 
  + josition的值不为relative和static。
  + display的值为table-cell、table-caption、inline-block、flex中的任何一个。
+ 那BFC一般有什么用呢？
  + 比如常见的多栏布局，结合块级别元素浮动，里面的元素则是在一个相对隔离的环境里运行。
+ IFC-内联格式化上下文，GFC-网格布局格式化上下文，FFC-自适应格式化上下文

### 10、CSS预处理器

### 11、em、rem、px 

+ px ：绝对长度单位
+ em：相对长度单位，参照物是父级元素的字体大小
+ rem：相对长度单位，参照物试试根元素，支持ie9+

### 12、父子边距重合

+ 在父元素上加overflow:hidden;使其成为BFC

### 13、padding、margin百分比单位参考的依据

+ 父元素盒子的宽度

### 14、清除浮动

（把浮动元素圈起来，不让他们出来影响其他元素）

（1）额外标签法(末尾标签法：在浮动元素的末尾添加一个空的标签)----添加了无意义的标签，结构较差，不推荐

```html
< div  style = "clear:both" > </div>
< br style = "clear:both" / >      
<!--也可以使用br等别的块级元素来清除浮动-->
```

（2）overflow，给父元素添加overflow样式，触发BFC方式。。。但是会导致内容点多的时候换行被隐藏掉，无法显示要溢出来的元素。

```
overflow:hidden/auto;
```

（3）伪元素法

```css
/*1、after伪元素清除浮动*/
.clearfix: after {    
    content: ".";   /*尽量不要为空，一般写一个点*/    
    height: 0;      /*盒子高度为0，看不见*/    
    display: block;     /*插入伪元素是行内元素，要转化为块级元素*/     
    visibility: hidden;       /*content有内容，将元素隐藏*/     
    clear: both;  
} 
.clearfix  {    
    * zoom:  1;    /*  *只有IE6,7识别 */
}

/*2、after伪元素空余字符法*/
.clearfix::after {    
    content: "\200B";    /* content:'\0200'; 也可以,不可见字符 */   
    display: block;   
    height: 0;    
    clear: both;
} 
.clearfix  {     
    * zoom:  1; 
}

/*3、使用before和after双伪元素清除浮动*/
.clearfix: before,.clearfix: after  {        
    content:"";         
    display:  table;    
}    
.clearfix: after  {        
    clear:  both;    
}    
.clearfix  {         
    * zoom:  1;    
}
```



8、移动端自适应的方式

## 二、html

### **1、列出常见的行内元素、块级元素、空(void)元素？**

### **2、DIV元素垂直居中**

1. translate(-50%，50%)；left、top 50%
2. 确认div宽度left、top 50%；margin为宽高一半的负值
3. left、top 、right、bottom:0；margin:auto
4. flex
5. flex布局和margin:auto
6. display:table-cell;vertical-align:middle;text-align:center
7. left、top:calc(父宽/高-子宽/高)/2

### **3、如何理解 HTML 语义化？**

- 让人更容易读懂（增加代码可读性）。
- 让搜索引擎更容易读懂，有助于爬虫抓取更多的有效信息，爬虫依赖于标签来确定上下文和各个关键字的权重（SEO）。
- 在没有 CSS 样式下，页面也能呈现出很好地内容结构、代码结构。

### **4、script 标签中 defer 和 async 的区别？**

+ `script` ：会阻碍 HTML 解析，只有下载好并执行完脚本才会继续解析 HTML。

+ `async script` ：当浏览器遇到带有 async 属性的 script 时，请求该脚本的网络请求是异步的，不会阻塞浏览器解析 HTML，一旦网络请求回来之后，如果此时 HTML 还没有解析完，浏览器会暂停解析，先让 JS 引擎执行代码。所以有可能会阻断 HTML 的解析。

+ `defer script`：完全不会阻碍 HTML 的解析，当浏览器遇到带有 defer 属性的 script 时，获取该脚本的网络请求也是异步的，不会阻塞浏览器解析 HTML，一旦网络请求回来之后，如果此时 HTML 还没有解析完，浏览器不会暂停解析并执行 JS 代码，而是等待 HTML 解析完毕再执行 JS 代码。

> [图解 script 标签中的 async 和 defer 属性](https://juejin.cn/post/6894629999215640583)

### 5、iframe的优点、缺点

一、iframe的优点：
1、　iframe能够原封不动地把嵌入的网页展现出来。

2、　如果有多个网页调用iframe，只需要修改iframe的内容，就可以实现对调用iframe的每一个页面内容的更改，方便快捷。

3、　网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用性。

4、　如果遇到加载缓慢的第三方内容如图标和广告等，可以用iframe来解决。

## 三、js

### **1、this指向问题**

+ 普通函数：指向它的**调用者**
  + 在默认情况下：没找到直接调用者，this指向window。
  + 在严格模式下：没找到直接调用者，绑定到 undefined 
  + `apply`、`call`或`bind`，函数内的 this ，就是作为参数传入这些方法的对象
  + `new`关键字，`this`是一个新创建的对象
+ 箭头函数：不看调用者。而是看定义它时**所在的作用域**，箭头函数本身不存在this，所以它的this指向上一层作用域所在的对象。
  + 不能作为构造函数
  + 不能使用arguments对象
  + 不能使用yield命令

```js
function foo(){
    console.log(this.a)
}
function doFoo(fn){
    console.log(this)
    fn()
}
var obj={a:1,foo}
var a=2;
doFoo(obj.foo) 
//打印出：window 2
```

```js
function foo(){
    console.log(this.a)
}
function doFoo(fn){
    console.log(this)
    fn()
}
var obj={a:1,foo}
var a=2;
//改变doFoo指向
doFoo.call(obj,obj.foo) 
//打印出：obj 2
```

```js
function foo(){
    console.log(this.a)
}
function doFoo(fn){
    console.log(this)
    fn.call(this)
}
var obj={a:1,foo}
var a=2;
//改变doFoo指向
doFoo.call(obj,obj.foo) 
//打印出：obj 1
```

### 2、什么时候用箭头函数

**为何用？**

更简短的函数，并且不绑定`this`

+ 普通函数，每个新定义的函数都有它自己的`this`值
  + 构造函数，是一个新对象
  + 严格模式的函数调用中，则为undefined
  + 作为"对象方法"调用则为基础对象
+ 箭头函数，没有它自己的执行上下，**这就意味着代码中的`this`和`arguments`都是继承它的父函数**。
  + 通过call或者apply调用，只能传递参数(不能绑定this)

**何时用？(不推荐使用场景)**

+ 不能使用new操作符，创建构造函数
+ 不能使用arguments对象

+ 不能用prototype属性

+ 不能使用yield关键字

https://segmentfault.com/a/1190000020134330

###  **3、call、apply、bind有什么区别？**

+ https://www.cnblogs.com/jiajia-hjj/p/15867092.html
+ 都是用来改变函数的this对象的指向的；
+ 第一个参数都是this要指向的对象，也就是想指定的上下文；
+ 都可以利用后续参数传参，apply第二个参数是个数组。call和bind都是以逗号分隔；
+ bind 是返回函数，便于稍后调用；apply 、call 则是立即调用 。

### **4、改变this的指向**

+ call、apply、bind可以改变this的指向

### 5、**基础的数据类型有哪几种**

https://www.cnblogs.com/jiajia-hjj/p/15214043.html

+ 8 种基础的数据类型，Number、Undefined、Boolean、Null、String、Object、Symbol、BigInt
+ Symbol 代表独一无二的值，最大的用法是用来定义对象的唯一属性名。
+ BigInt 可以表示任意大小的整数。原来最大是2^-13^  ~2 ^13^ 

### 6、值类型和引用类型的理解

+ 值类型是直接存储在**栈（stack）**中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
+ 引用类型存储在**堆（heap）**中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；栈中存储内存地址。



### 7、数据类型的判断

+ **typeof**：能判断所有**值类型，函数**。不可对 **null、对象、数组**进行精确判断，因为都返回 `object` 。

```js
console.log(typeof undefined); // undefined
console.log(typeof 2); // number
console.log(typeof true); // boolean
console.log(typeof "str"); // string
console.log(typeof Symbol("foo")); // symbol
console.log(typeof 2172141653n); // bigint
console.log(typeof function () {}); // function
// 不能判别
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof null); // object

```

- **instanceof**：能判断**对象**类型，不能判断基本数据类型，**其内部运行机制是判断在其原型链中能否找到该类型的原型**

```js
class People {}
class Student extends People {}

const vortesnail = new Student();

console.log(vortesnail instanceof People); // true
console.log(vortesnail instanceof Student); // true

```



- **Object.prototype.toString.call()**：所有原始数据类型都是能判断的，还有 **Error 对象，Date 对象**等。

```js
Object.prototype.toString.call(2); // "[object Number]"
Object.prototype.toString.call(""); // "[object String]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(Math); // "[object Math]"
Object.prototype.toString.call({}); // "[object Object]"
Object.prototype.toString.call([]); // "[object Array]"
Object.prototype.toString.call(function () {}); // "[object Function]"


```



### 8、**如何判断变量是否为数组**

```javascript
//1、Array.isArray()----ES5新增的方法
Array.isArray(arr); // true
//2、原型链
arr.__proto__ === Array.prototype; // true
//3、instanceof
arr instanceof Array; // true
//4、Object.prototype.toString.call
Object.prototype.toString.call(arr); // "[object Array]"

```

### 9、JavaScript数字精度丢失问题

https://www.cnblogs.com/jiajia-hjj/p/15938311.html

+ **进制转换**，二进制浮点运算，尾数最大可以存储 53 位有效数字，大于 53 位后面的会全部截掉，将导致精度丢失。
+ **对阶运算**：阶小的尾数要根据阶差来右移（`0舍1入`），尾数位移时可能会发生数丢失的情况

+ 解决的整体思想是，大整数运算--->BigInt；小数运算---->把小数放到位整数（乘倍数），再缩小回原来倍数（除倍数）

### 10、**深拷贝、浅拷贝**

https://www.cnblogs.com/jiajia-hjj/p/15271760.html

**方法一：JSON.parse(JSON.stringify(obj))**

- 局限：函数不能复制；原型链搞没了...

**方法二：递归拷贝**

```js
//普通递归版本
function deepClone(obj){
    if(typeof obj!="object"){
        return obj;
    }
    let result = obj instanceof Array ||Object.prototype.toString.call(obj)==="[Object Array]"?[]:{};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            result= deepClone(obj[key]);
        }
    }
    return result;
}
// 解决循环引用问题的版本
function deepClone(obj={},map=new Map()){
    if(typeof obj!="object"){
        return obj;
    }
    if(map.get(obj)){
        return map.get(obj)
    }
    let result={};
    if(obj instanceof Array ||Object.prototype.toString.call(obj)==="[Object Array]"){
        result=[];
    }
    map.set(obj,result);
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            result= deepClone(obj[key],map);
        }
    }
   return result;
}

```



### 11、创建对象的方式

### 12、构造函数

+ 是一种特殊的函数。主要用来在创建对象时初始化对象。
+ 构造函数用于创建一一类对象，首字母要大写。
+ 构造函数要和new一起使用才有意义。
+ **好处**：代码的简洁性，识别对象的具体类型。

### 13、new关键字

+ 在内存中创建一个新的空对象
+ 根据原型链，设置空对象的 `__proto__` 为构造函数的 `prototype` 。
+ 让构造函数的this指向这个新的对象，执行构造函数。目的：给这个新对象加属性和方法
+ new会返回这个新对象

```js
function myNew(context) {
    const obj =new Object();
    obj.__proto__=context.prototype;
    let res=context.apply(obj,[...arguments].slice(1));
    return typeof res=="object"?res:obj;
}

function Person(name,age){
    this.name=name;
    this.age=age
}
//实例
let p1=myNew(Person,'hjj','18');//==>Person {name: 'hjj', age: '18'}

```

### 14、原型和原型链

https://www.cnblogs.com/jiajia-hjj/p/15376992.html

#### 1）`__proto__`、`prototype`

+ 实例对象中有**`__proto__`**属性，叫原型，是一个对象，是给浏览器使用，不是标准的属性----->可以叫原型对象。
+ 任何函数中有 `prototype` 属性，叫原型，是一个对象，是给程序员使用，是标准的属性---->可以叫原型对象。。constructor属
+ 函数也是对象，所以也有`__proto__`属性

#### 2）prototype（真正原型）

+ 每一个构造函数都有一个 `prototype` 属性，是一个对象。
+ `prototype`对象的所有属性和方法，都会被构造函数的实例继承。
+ 所有对象实例需要共享的属性和方法，直接定义在 `prototype` 对象上。

#### 3）构造函数、实例、原型三者之间的关系

+ 每一个构造函数都有一个 `prototype` 属性，是一个对象。
+ 构造函数的 `prototype` 对象默认都有一个 `constructor` 属性，指向 `prototype` 对象所在函数。

```js
console.log(F.constructor === F) // => true
console.log(F.prototype.constructor === F) // => true

```

+ 实例对象中有`__proto__`属性，是一个对象，指向构造函数的 `prototype` 对象

```js
实例对象.__proto__===构造函数.prototype

```

+ 实例对象可以直接或间接继承了原型对象成员。

####  4）constructor 属性

```js
function Person() {}
var p1 = new Person();
//1、constructor 是构造函数中`prototype`属性的成员，指向 `prototype` 对象所在函数。
console.log(Person.prototype.constructor === Person) // => true
//2、实例对象中有`__proto__`属性，会指向构造函数中prototype对象。
console.log(p1.__proto__ === Person.prototype) // => true
//3、所以实例对象也继承了原型对象的成员constructor属性。
console.log(p1.constructor === Person.prototype.constructor) // => true
console.log(p1.constructor) // 返回构造函数本身=> Person

```

#### 5）判断实例和构造函数的关系

```js
console.log(p1.constructor === Person) // => true
//instanceof操作符,检测对象的类型更可靠
console.log(p1 instanceof Person) // => true

```

#### 6）**原型链**

>  原型链是一种关系,实例对象和原型对象之间的关系,关系是通过原型(`__proto__`)来联系的

**属性成员的搜索原则：原型链**

+ 实例对象使用属性或方法时，先在**实例本身**中查找，找到了则直接使用
+ 找不到，则沿着原型链向上查找，（去实例对象的`__proto__`指向的**原型对象`prototype`**中找），找到了则使用。
+ 如果一直到原型链的末端还没有找到，则返回 `undefined`

```js
function Person() {

}
var person = new Person();
//原型链
person.__proto__  ===Person.prototype;
Person.prototype.__proto__ ===Object.prototype;  //(构造函数Object())
Object.prototype.__proto__ === null

```



###  15、作用域与作用域链

https://www.cnblogs.com/jiajia-hjj/p/15219824.html

**作用域：**确定当前执行代码对变量的访问权限。（全局作用域、函数作用域、块级作用域）

**作用域链：**从当前作用域开始一层层往上找某个变量，如果找到全局作用域还没找到，就放弃寻找 。这种层级关系就是作用域链。

### 16、词法作用域

- 静态作用域(**词法作用域**)，函数的作用域在函数定义的时候就决定了。
  + **js 采用的是静态作用域。**
- **动态作用域**，与词法作用域相对。函数的作用域是在函数调用的时候才决定的。

```js
var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar();

// 结果是 ???==>1
/*
**静态作用域：**
执行 foo 函数，先从 foo 函数内部查找是否有局部变量 value，
如果没有，就根据书写的位置，查找上面一层的代码，
也就是 value 等于 1，所以结果会打印 1。

**动态作用域**：
执行 foo 函数，依然是从 foo 函数内部查找是否有局部变量 value。
如果没有，就从调用函数的作用域，也就是 bar 函数内部查找 value 变量，所以结果会打印 2。


结果：js采用的是静态作用域，所以结果是 1。
*/

```

### 17、闭包

**闭包函数：**声明在一个函数中的函数，叫做闭包函数。

**闭包：**一个内层函数中访问到其外层函数的作用域

**应用场景**：缓存工具，隐藏数据，不被外界访问，只暴露api。(闭包--公用方法，内部变量--私有属性（private）)

**闭包的作用**

+ 访问其他函数内部变量
+ 保护变量不被内存回收机制回收
+ 避免全局变量被污染，方便调用上下文的局部变量，加强封装性

**闭包的缺点**

+ 闭包长期占用内存，内存消耗很大，可能导致内存泄露
+ 延长作用域链

### 18、call、apply、bind 实现原理

### 19、**数组的方法**

https://www.cnblogs.com/jiajia-hjj/p/15214050.html

转换方法：toString()、valueOf()、join()、Array.from()

+ Array.from()： 将一个类似数组或可迭代对象，转为一个新的数组。浅拷贝

栈方法：push()/pop()

队列方法：unshift()/shift()

排序方法：reverse()、sort()、

操作方法：concat()、slice()、splice()

位置方法：indexOf()、lastIndexOf()、

迭代方法：map()、reduce()、filter()、every()、some()、forEach()、find()、findIndex()

### 20、数组响应式方法

+ push()/pop()
+ unshift()/shift()
+ splice()
+ sort 
+ reverse 

### 21、**数组去重**

https://www.cnblogs.com/jiajia-hjj/p/15024493.html

```js
function unique(arr){
    return [...new Set(arr)]
}

```

```js
function unique(arr){
    let newArr=[]
    arr.forEach((item)=> {
        if(newArr.indexOf(item)==-1){
            newArr.push(item)
        }
    })
    return newArr
}
function unique2(arr) {
    var obj = {};
    return arr.filter(ele => {
        if (!obj[ele]) {
            obj[ele] = true;
            return true;
        }
    })
}

```

### 22、**字符串的方法**

https://www.cnblogs.com/jiajia-hjj/p/15214059.html

+ 字符方法：charAt()、charCodeAt()、str[i]
+ 字符串操作方法：concat()、slice()、substring()、substr()、
+ 位置方法：indexOf()、lastIndexOf()、search()、match()
+ 去除空白：trim()
+ 大小写转换方法：toLocaleUpperCase()、toLocaleLowerCase()
+ replace()、split()、fromCharCode()

### 23、**内置对象-Math**

https://www.cnblogs.com/jiajia-hjj/p/15219743.html

```js
Math.PI			// 圆周率
Math.random()// 生成随机数，范围[0,1)
Math.floor()/Math.ceil()// 向下取整/向上取整
Math.round()	// 取整，四舍五入
Math.abs()		// 绝对值
Math.max()/Math.min()// 求最大和最小值

Math.sin()/Math.cos()// 正弦/余弦
Math.power()/Math.sqrt() // 求指数次幂/求平方根
//1-10随机数
Math.ceil(Math.random()*10)

```



### 24、**内置对象-Date**

https://www.cnblogs.com/jiajia-hjj/p/15219751.html

获取当前日期的毫秒数

```js
var date = new Date();
date.valueOf();
date.getTime();
Date.parse(data)
//HTML5中提供的方法，有兼容性问题
Date.now();

// 不支持HTML5的浏览器，可以用下面这种方式
var now = + new Date();	
console.log(now)//1630420547076	

```



### 25、**正则**

https://www.cnblogs.com/jiajia-hjj/p/15219729.html



## 四、Web API

### 1、页面加载事件

- onload

```javascript
window.onload = function () {
  // 当页面加载完成执行
  // 当页面完全加载所有内容（包括图像、脚本文件、CSS 文件等）执行
}

```

- onunload

```javascript
window.onunload = function () {
  // 当用户退出页面时执行
}

```

### 2、location对象

+ http://localhost:8080/new/index.html?ID=24618&page=1#r_70732423
+ scheme://host.domain:port/path/filename
+ 协议：//域名:端口号/服务器上的路径/文档的名称?参数#锚
+ 主机= 域名+端口号
+ 属性：
  + href->当前地址，跳转页面
  + protocol->协议，
  + host->主机，
  + hostname->主机的域名
  + port->端口号，
  + search->参数，
  + hash->锚点，
  + location.assign->加载新文档

### 3、history对象

路径变页面也变，页面刷新

- back() 前一个 URL。
- forward() 下一个 URL
- go() 某个具体页面

路径会变，但是页面不会变，页面不刷新

```js
history.pushState({},'','home') 
history.replaceState({},'','home') 

```

### 4、navigator对象

常用来判断设备

- userAgent：通过userAgent可以判断用户浏览器的类型
- platform：通过platform可以判断浏览器所在的系统平台类型.







## 五、ES6

generator生成器函数

promise

async/await

###  async/await 和 Promise 的关系

- async/await 是消灭异步回调的终极武器。
- 但和 Promise 并不互斥，反而，两者相辅相成。
- 执行 async 函数，返回的一定是 Promise 对象。
- await 相当于 Promise 的 then。
- tru...catch 可捕获异常，代替了 Promise 的 catch。

### Set、WeakSet和Map、WeakMap的区别

https://www.cnblogs.com/jiajia-hjj/p/15270129.html

**Set**：集合, 类似于数组

- 成员唯一、无序且不重复
- [value, value]，键值与键名是一致的（或者说只有键值，没有键名）
- 可以遍历，方法有：add、delete、has、clear，属性有size

**WeakSet**

- 成员都是对象

- 成员都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用。可以被垃圾回收机制回收，可以用来保存DOM节点，不容易造成**内存泄漏**

  (*内存泄漏：内容节点不会删掉，内存被没有用的东西占用，就会感觉内存越来越小，因为垃圾挤占了空间，感觉内存是不是丢了)；

- 使用场景：**节点保存**

- 不能遍历，方法有add、delete、has

**Map**

- 字典，本质上是键值对的集合
- 可以遍历，方法很多可以跟各种数据格式转换

**WeakMap**

- 只接受对象作为键名（null除外），不接受其他类型的值作为键名
- 键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的，不容易造成**内存泄漏**
- 不能遍历，方法有get、set、has、delete、clear
- 使用场景：**点作为键名、部署私有属性**

箭头函数

展开运算符(…)

## 六、jQuery

1、效果

## 七、编程算法

### 10、instanceof

+ **instanceof**：能判断**对象**类型，不能判断基本数据类型，**其内部运行机制是判断在其原型链中能否找到该类型的原型**

```js
arr.__proto__ === Array.prototype; // true

```

```js
function myInstanceof(target, origin) {
  if (typeof target !== "object" || target === null) return false;
  if (typeof origin !== "function")
    throw new TypeError("origin must be function");
  let proto = Object.getPrototypeOf(target); // 相当于 proto = target.__proto__;
  while (proto) {
    if (proto === origin.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

myInstanceof([], Array)

```

### 11、数组扁平化

```js
//es6  flat
[1, [2, 3, [4, 5]]].flat(Infinity);//[1, 2, 3, 4, 5]
//普通
function flag(arr){
    while(arr.some(item=>Array.isArray(item))){
        arr=[].concat(...arr);
    }
    return arr
}
//可以指定扁平化的深度
function flat(arr, depth = 1) {
  if (depth > 0) {
    // 以下代码还可以简化，不过为了可读性，还是....
    return arr.reduce((pre,cur)=>{
       return pre.concat(Array.isArray(cur)?flat(cur, depth - 1):cur) 
    },[])
  }
  //为什么不是arr，而是arr.slice()。因为返回一个新的数组
  return arr.slice();
}
flat([1, [2, 3, [4, 5]]],2);//[1, 2, 3, 4, 5]

```

### 12、手写Promise/A

https://juejin.cn/post/6945319439772434469#heading-27

**Promise/A+规范**

+ 不管进行什么操作都返回一个promise对象，这个对象里面会有一些属性和方法

+ 这个promise有三种状态；Unfulfilled（未完成，初始状态）、Fulfilled（已完成）、Failed（失败、拒绝）

+ 这个promise对象的使用时通过then方法进行的调用

```js
// MyPromise.js
// 先定义三个常量表示状态
const PENDING='pending';
const FULFILLED='fulfilled';
const REJECTED='rejected';
// 新建 MyPromise 类
class MyPromise{
    constructor(executor){
        // executor 是一个执行器，进入会立即执行
    // 并传入resolve和reject方法
        executor(this.resolve,this.reject)
    }
    // 储存状态的变量，初始值是 pending
    status = PENDING;
    // 成功之后的值
    value = null;
    // 失败之后的原因
    reason = null;
      // resolve和reject为什么要用箭头函数？
      // 如果直接调用的话，普通函数this指向的是window或者undefined
      // 用箭头函数就可以让this指向当前实例对象
      //this不看调用者。而是看定义它时**所在的作用域**;普通函数this看调用者
      
    // 存储成功回调函数
   onFulfilledCallbacks = [];
    // 存储失败回调函数
   onRejectedCallbacks = [];

     // 更改成功后的状态
    resolve=(value)=>{
        // 只有状态是等待，才执行状态修改
        if(this.status==PENDING){
            // 状态修改为成功
            this.status=FULFILLED;
             // 保存成功之后的值
            this.value=value;
            // ==== 新增 ====
            // 判断成功回调是否存在，如果存在就调用
            while(this.onFulfilledCallbacks){
                // Array.shift() 取出数组第一个元素，然后（）调用，shift不是纯函数，取出后，数组将失去该元素，直到数组为空
                this.onFulfilledCallbacks.shift()(value);
            }
        }
    }
    // 更改失败后的状态
    reject=(reason)=>{
         // 只有状态是等待，才执行状态修改
        if(this.status==PENDING){
            // 状态成功为失败
            this.status=REJECTED;
            // 保存失败后的原因
            this.reason=reason;
            // ==== 新增 ====
            // 判断失败回调是否存在，如果存在就调用
            while(this.onRejectedCallbacks.length){
                // Array.shift() 取出数组第一个元素，然后（）调用，shift不是纯函数，取出后，数组将失去该元素，直到数组为空
                 this.onRejectedCallbacks.shift()(reason);
            }
        }
    }
    then(onFulfilled,onRejected){
          // 判断状态
         if(this.status==FULFILLED){
              // 调用成功回调，并且把值返回
             onFulfilled(this.value);
         }else if (this.status === REJECTED) {
             // 调用失败回调，并且把原因返回
             onRejected(this.reason);
         }else if (this.status === PENDING) {
            // ==== 新增 ====
            // 因为不知道后面状态的变化情况，所以将成功回调和失败回调存储起来
            // 等到执行成功失败函数的时候再传递
           this.onFulfilledCallbacks.push(onFulfilled);
          this.onRejectedCallbacks.push(onRejected);
         }
    }
}

//测试1：
const promise = new MyPromise((resolve, reject) => {
   resolve('success')
   reject('err')
})

promise.then(value => {
  console.log('resolve', value)
}, reason => {
  console.log('reject', reason)
})

// 执行结果：resolve success

//测试2：有异步请求
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 2000); 
})


```

### 13、使用Promise实现每隔1秒输出1,2,3

```js
//async/await和Promise
async function f1(){
    await new Promise(resolve=>{
        setTimeout(() => {
            resolve(console.log(1));
        }, 1000)
    })
    await new Promise(resolve=>{
        setTimeout(() => {
            resolve(console.log(2));
        }, 1000)
    })
    await new Promise(resolve=>{
        setTimeout(() => {
            resolve(console.log(3));
        }, 1000)
    })
}

var arr = [1, 2, 3, 4]
async function f2(){
    for(let i=0;i<arr.length-1;i++){
       await new Promise((resolve) => {
            setTimeout(() => {
                console.log(arr[i])
                resolve()
            }, 5000)
        })
    }
}
f2()

//可以用Promise配合着reduce不停的在promise后面叠加.then
const arr = [1, 2, 3]
arr.reduce((p, x) => {
  return p.then(() => {
    return new Promise(r => {
      setTimeout(() => r(console.log(x)), 1000)
    })
  })
}, Promise.resolve())


//5s后打印 1 2 3
const arr = [1, 2, 3]
const result =  arr.reduce((p, x) => {
    return p.then(new Promise(r=>{
        setTimeout(() => r(console.log(x)), 5000)
    }))
}, Promise.resolve())

```

### 14、使用Promise实现红绿灯交替重复亮

红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）三个亮灯函数已经存在：

```js
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}
const light = function (timer, cb){
    return new Promise(resolve=>{
        setTimeout(() => resolve(cb()), timer)
    })
}
const step = function () {
    Promise.resolve().then(()=>{
        return light(3000,red);
    }).then(()=>{
         return light(2000,yellow);

    }).then(()=>{
        return  light(1000,green);
    }).then(()=>{
        step();
    })
}

step();


```

### 15、 实现mergePromise函数

实现mergePromise函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中。

```js
const time = (timer) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, timer)
  })
}
const ajax1 = () => time(2000).then(() => {
  console.log(1);
  return 1
})
const ajax2 = () => time(1000).then(() => {
  console.log(2);
  return 2
})
const ajax3 = () => time(1000).then(() => {
  console.log(3);
  return 3
})

function mergePromise (ajaxArray) {
  // 在这里写代码
   // 存放每个ajax的结果
  const data = [];
  let promise = Promise.resolve();
  ajaxArray.forEach(ajax => {
  	// 第一次的then为了用来调用ajax
  	// 第二次的then是为了获取ajax的结果
    promise = promise.then(ajax).then(res => {
      data.push(res);
      return data; // 把每次的结果返回
    })
  })
  // 最后得到的promise,最后一个then的值就是data
  return promise;
}

mergePromise([ajax1, ajax2, ajax3]).then(data => {
  console.log("done");
  console.log(data); // data 为 [1, 2, 3]
});

// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]


```

### 16、封装一个异步加载图片的方法

```js
function loadImg(url) {
    return new Promise((resolve,reject)=>{
        const img=new Image();
        img.onload=function(){
          console.log("一张图片加载完成");
          resolve(img);
        }
        img.onerror=function(){
            reject(new Error('Could not load image at' + url))
        }
        img.src=url;
    })
}

```

### 17、限制异步操作的并发个数并尽可能快的完成全部

+ 可以先请求`urls`中的前面三个(下标为`0,1,2`)，并且请求的时候使用`Promise.race()`来同时请求
+ 三个中有一个先完成了(如下标为`1`的图片)，我们就把这个当前数组中已经完成的那一项(第`1`项)换成还没有请求的那一项(`urls`中下标为`3`)。

```js
function limitLoad(urls, handler, limit) {
    let sequence = [].concat(urls); // 复制urls
    // 这一步是为了初始化 promises 这个"容器"
    let promises = sequence.splice(0, limit).map((url, index) => {
        return handler(url).then(() => {
            // 返回下标是为了知道数组中是哪一项最先完成
            return index;
        });
    });
    // 注意这里要将整个变量过程返回，这样得到的就是一个Promise，可以在外面链式调用
    return sequence
        .reduce((pCollect, url) => {
        return pCollect
            .then(() => {
            return Promise.race(promises); // 返回已经完成的下标
        })
            .then(fastestIndex => { // 获取到已经完成的下标
            // 将"容器"内已经完成的那一项替换
            promises[fastestIndex] = handler(url).then(
                () => {
                    return fastestIndex; // 要继续将这个下标返回，以便下一次变量
                }
            );
        })
            .catch(err => {
            console.error(err);
        });
    }, Promise.resolve()) // 初始化传入
        .then(() => { // 最后三个用.all来调用
        return Promise.all(promises);
    });
}
limitLoad(urls, loadImg, 3)
    .then(res => {
    console.log("图片全部加载完毕");
    console.log(res);
})
    .catch(err => {
    console.error(err);
});


```

### 18、实现一个 Promise.all

## 八、浏览器

### **1、从浏览器地址栏输入 url 到请求返回发生了什么**

+ 输入 URL 后解析出协议、主机、端口、路径等信息，并构造一个 HTTP 请求。
  + 强缓存。
  + 协商缓存。
+ DNS域名解析：通过域名找到对应的服务器，查询 URL 对应的 IP 
+ TCP 连接，三次握手
+ 开始发送 HTTP 请求报文
+ 服务器处理请求并返回 HTTP 报文
+ 浏览器渲染页面。
+ 当数据传送完毕，需要断开 tcp 连接，此时发起 tcp 四次挥手。



### 2、**TCP三次握手**

+ 客户端发送一个带 SYN=1，Seq=X 的数据包到服务器端口`（第一次握手，由浏览器发起，告诉服务器我要发送请求了）`====>确认客服端的**发送能力**
+ 服务器发回一个带 SYN=1， ACK=X+1， Seq=Y 的响应包以示传达确认信息`（第二次握手，由服务器发起，告诉浏览器我准备接受了，你赶紧发送吧）`===>服务端的**发送能力和接收能力**
+ 客户端再回传一个带 ACK=Y+1， Seq=Z 的数据包，代表“握手结束”`（第三次握手，由浏览器发送，告诉服务器，我马上就发了，准备接受吧）`====>客户端的**接收能力**

### 3、**TCP四次挥手**

+ 发起方向被动方发送报文，Fin、Ack、Seq，表示已经没有数据传输了。并进入 FIN_WAIT_1 状态。 `(第一次挥手：由浏览器发起的，发送给服务器，我请求报文发送完了，你准备关闭吧)`
+ 被动方发送报文，Ack、Seq，表示同意关闭请求。此时主机发起方进入 FIN_WAIT_2 状态。 `(第二次挥手：由服务器发起的，告诉浏览器，我请求报文接受完了，我准备关闭了，你也准备吧)`
+ 被动方向发起方发送报文段，Fin、Ack、Seq，请求关闭连接。并进入 LAST_ACK 状态。 `(第三次挥手：由服务器发起，告诉浏览器，我响应报文发送完了，你准备关闭吧)`
+ 发起方向被动方发送报文段，Ack、Seq。然后进入等待 TIME_WAIT 状态。被动方收到发起方的报文段以后关闭连接。发起方等待一定时间未收到回复，则正常关闭。 `(第四次挥手：由浏览器发起，告诉服务器，我响应报文接受完了，我准备关闭了，你也准备吧)`

### 4、**浏览器渲染机制？**

+ 解析：`HTML`-->`DOM`(DOM规则树)，`CSS`--->`CSSOM`(CSS规则树)
+ 结合：`DOM`和`CSSOM`合并就产生了渲染树（`Render Tree`；
+ 布局：渲染树-->知道了所有节点的样式--->计算大小和位置
+ 节点绘制到页面

https://www.cnblogs.com/jiajia-hjj/p/15400057.html

### 5、**重排（reflow）和重绘（repaint）的理解**

+ **重排**（回流）：影响了元素的**几何信息**(元素在视口内的位置和尺寸大小)，，浏览器需要**重新计算**元素在视口内的几何属性。

+ **重绘**：几何属性或者样式发生改变，将渲染树的每个节点都转换为屏幕上的**实际像素**。

### 6、如何做好不频繁触发浏览器的回流与重绘？

**css**

- **使用 `transform` 替代 `top`**、`left`

- **使用 `visibility` 替换 `display: none`** ，因为前者只会引起重绘，后者改变了布局会引发回流。

- **避免使用`table`布局**，可能很小的一个小改动会造成整个 `table` 的重新布局。

- **尽可能在`DOM`树的最末端改变`class`**，回流是不可避免的，但可以减少其影响。尽可能在DOM树的最末端改变class，可以限制了回流的范围，使其影响尽可能少的节点。

- **避免设置多层内联样式**，CSS 选择符**从右往左**匹配查找，避免节点层级过多。

- **将动画效果应用到`position`属性为`absolute`或`fixed`的元素上**，避免影响其他元素的布局，这样只是一个重绘，而不是回流，同时，控制动画速度可以选择 [requestAnimationFrame](https://www.cnblogs.com/jiajia-hjj/p/15405720.html)。

- **避免使用`CSS`表达式**，可能会引发回流。

- 将频繁重绘或者回流的节点设置为图层

  ，图层能够阻止该节点的渲染行为影响别的节点，浏览器什么时候会创建一个独立的复合图层呢？

  - `video`、`iframe`、`canvas`等标签
  - will-change
  - 3D 或者 CSS transform
  - 元素覆盖时，比如使用了 `z-index` 属性...浏览器会自动将该节点变为图层。

- **CSS3 硬件加速（GPU加速）**，使用css3硬件加速，可以让`transform`、`opacity`、`filters`这些动画不会引起回流重绘 。但是对于动画的其它属性，比如`background-color`这些，还是会引起回流重绘的，不过它还是可以提升这些动画的性能。(见6.2)

**js**

- **避免频繁操作样式**，最好一次性重写`style`属性，或者将样式列表定义为`class`并一次性更改`class`属性。(cssText)
- **避免频繁操作`DOM`**，创建一个`documentFragment`，在它上面应用所有`DOM操作`，最后再把它添加到文档中。
- **避免频繁读取会引发回流/重绘的属性**，如果确实需要多次使用，就用一个变量缓存起来。
- **对具有复杂动画的元素使用绝对定位**，使它脱离文档流，否则会引起父元素及后续元素频繁回流。

### 7、浏览器内核（渲染引擎）

https://www.cnblogs.com/jiajia-hjj/p/15395960.html

- GUI 渲染线程
- JavaScript引擎线程
- 定时触发器线程
- 事件触发线程
- 异步http请求线程



### 8、Event Loop

+ 宏任务队列(macr)：setTimeout、setInterval、script（整体代码）、 I/O 操作、UI 渲染等
+ 微任务队列(micro)：new Promise().then(回调)、MutationObserver(html5新特性) 

+ 过程：
  + micro 队列空，macro 队列里有且只有一个 script 脚本（整体代码）
  + 全局上下文（script 标签）被推入执行栈，同步代码执行
  + 在执行的过程中，在执行的过程中，会判断是同步任务还是异步任务，可以产生新的 macro-task 与 micro-task，分别被推入各自的任务队列
  + 同步代码执行完了，script 脚本会被移出 macro 队列（是队列的 macro-task 的执行和出队的过程）
  + 会查看是否有micro队列，有，处理micro队列中的所有任务；没有，会读取macro 队列中排在最前的任务
  + 执行渲染操作，更新界面
  + 检查是否存在 Web worker 任务，如果有，则对其进行处理
+ 上述过程循环往复，直到两个队列都清空

+ macro-task 出队时，任务是**一个一个**执行的；而 micro-task 出队时，任务是**一队一队**执行的。

###  9、浏览器的垃圾回收机制(GC)

**1)有两种垃圾回收策略：**

- **标记清除**：标记阶段即为所有活动对象做上标记，清除阶段则把没有标记（也就是非活动对象）销毁。
- **引用计数**：它把**对象是否不再需要**简化定义为**对象有没有其他对象引用到它**。如果没有引用指向该对象（引用计数为 0），对象将被垃圾回收机制回收。

**标记清除的缺点：**

- **内存碎片化**，空闲内存块是不连续的，容易出现很多空闲内存块，还可能会出现分配所需内存过大的对象时找不到合适的块。
- **分配速度慢**，因为即便是使用 First-fit 策略，其操作仍是一个 O(n) 的操作，最坏情况是每次都要遍历到最后，同时因为碎片化，大对象的分配效率会更慢。

**标记整理（Mark-Compact）算法 **

+ 解决标记清除空闲内存不连续问题
+ 标记结束后，标记整理算法会将活着的对象（即不需要清理的对象）向内存的一端移动，最后清理掉边界的内存

**引用计数的缺点：**

- 需要一个计数器，所占内存空间大，因为我们也不知道被引用数量的上限。
- 解决不了循环引用导致的无法回收问题。

**引用计数的缺点：**

- 需要一个计数器，所占内存空间大，因为我们也不知道被引用数量的上限。
- 解决不了循环引用导致的无法回收问题。

**V8 的垃圾回收机制也是基于标记清除算法，不过对其做了一些优化：**

- 针对新生区采用并行回收。
- 针对老生区采用增量标记与惰性回收。（并发标记->并行清理，增量标记）

- 针对新生区采用并行回收。
- 针对老生区采用增量标记与惰性回收。



### 10、内存泄漏

+ 内存泄漏：无用对象内存，没有及时回收时

**内存泄漏包括：**

+ 意外的全局变量，直接赋值，或者通过this绑定到window的全局变量
+ 被遗忘的计时器，或者回调函数或者监听器（相当于是局部作用域链的全局变量，因为这些被遗忘的里面要使用该变量）
+ 脱离DOM的引用（DOM树、字典中）
+ 闭包中重复创建的变量

**避免内存泄漏：**

+ 注意程序逻辑，避免死循环。

+ 减少不必要的全局变量，或者相对作用域链上的全局变量，或者生命周期很长的对象，即时回收。

+ 避免频繁创建过多的对象，用完了记得销毁。

  

前端存储机制

前端缓存/后端缓存

Token-- 服务端身份验证的流行方案

前端埋点

## 九、web存储

https://www.cnblogs.com/jiajia-hjj/p/15207912.html

### 1、cookie

- 本身用于浏览器和 server 通讯。
- 被“借用”到本地存储来的。
- 可用 document.cookie = '...' 来修改。

其缺点：

- 存储大小限制为 4KB。
- http 请求时需要发送到服务端，增加请求数量。
- 只能用 document.cookie = '...' 来修改，太过简陋。

### 2、session

+ session的唯一标识SessionID保存在cookie中，具体的数据则是保存在session中
+ 存储内容类型是个对象
+ 保存在服务器，session的安全性大于cookie

### 3、localStorage 和 sessionStorage

- HTML5 专门为存储来设计的，最大可存 5M。
- API 简单易用， setItem getItem。
- 不会随着 http 请求被发送到服务端。

它们的区别：

- localStorage 数据会永久存储，除非代码删除或手动删除。
- sessionStorage 数据只存在于当前会话，浏览器关闭则清空。
- 一般用 localStorage 会多一些。

## 十、Http

### 1、http 状态码

**状态码分类**

- 1xx - 服务器收到请求。
- 2xx - 请求成功，如 200。
- 3xx - 重定向，如 302。
- 4xx - 客户端错误，如 404。
- 5xx - 服务端错误，如 500。

**常见状态码**

- 200 - 成功。
- 301 - 永久重定向（配合 location，浏览器自动处理）。
- 302 - 临时重定向（配合 location，浏览器自动处理）。
- 304 - 资源未被修改。
- 403 - 没权限。
- 404 - 资源未找到。
- 500 - 服务器错误。
- 504 - 网关超时。

**关于协议和规范**

- 状态码都是约定出来的。
- 要求大家都跟着执行。
- 不要违反规范，例如 IE 浏览器。

### 2、http 缓存

https://www.cnblogs.com/jiajia-hjj/p/15207908.html

- 关于缓存的介绍。
- http 缓存策略（强制缓存 + 协商缓存）。
- 刷新操作方式，对缓存的影响。

#### 1） 关于缓存

+ 什么是缓存？ 把一些不需要重新获取的内容再重新获取一次

+ 为什么需要缓存？ 网络请求相比于 CPU 的计算和页面渲染是非常非常慢的。

+ 哪些资源可以被缓存？ 静态资源，比如 js css img。

#### 2） 强制缓存

**三种情况：**

+ 不存在该缓存结果和缓存标识，强制缓存失效，则直接向服务器发起请求。
+ 存在该缓存结果和缓存标识，但该结果已失效，强制缓存失效，则使用协商缓存。
+ 存在该缓存结果和缓存标识，且该结果尚未失效，强制缓存生效，直接返回该结果

![图片 1.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ff1ec224244427ba9f15abecbd668fe~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

**Expires**：缓存的到期时间，不好因为（客户端和服务端有一方的时间不准确）会发生误差

**Cache-Control：**

- 在 Response Headers 中。
- 控制强制缓存的逻辑。
- 例如 Cache-Control: max-age=3153600（单位是秒）

**Cache-Control 有哪些值：**

- max-age：缓存最大过期时间。
- no-cache：可以在客户端存储资源，每次都必须去服务端做新鲜度校验，来决定从服务端获取新的资源（200）还是使用客户端缓存（304）。
- no-store：永远都不要在客户端存储资源，永远都去原始服务器去获取资源。

#### 3） 协商缓存（对比缓存）

- 服务端缓存策略。
- 服务端判断客户端资源，是否和服务端资源一样。
- 一致则返回 304，否则返回 200 和最新的资源。

![图片 2.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/56e265f46c80430fbf4673878a27bfc9~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp) 资源标识：

- 在 Response Headers 中，有两种。
- Last-Modified：资源的最后修改时间。
- Etag：资源的唯一标识（一个字符串，类似于人类的指纹）。

**Last-Modified：** ![图片 3.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4c4f44afeb73464295e9878d2c47b024~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp) 服务端拿到 if-Modified-Since 之后拿这个时间去和服务端资源最后修改时间做比较，如果一致则返回 304 ，不一致（也就是资源已经更新了）就返回 200 和新的资源及新的 Last-Modified。

**Etag：** ![图片 4.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e35285a8d23a4a4380676aeb681e815d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp) 其实 Etag 和 Last-Modified 一样的，只不过 Etag 是服务端对资源按照一定方式（比如 contenthash）计算出来的唯一标识，就像人类指纹一样，传给客户端之后，客户端再传过来时候，服务端会将其与现在的资源计算出来的唯一标识做比较，一致则返回 304，不一致就返回 200 和新的资源及新的 Etag。

**两者比较：**

- 优先使用 Etag。
- Last-Modified 只能精确到秒级。
- 如果资源被重复生成，而内容不变，则 Etag 更精确。

#### 4） 综述

+ 强制缓存优先于协商缓存进行，若强制缓存(Expires和Cache-Control)生效则直接使用缓存
+ 若不生效则进行协商缓存(Last-Modified / If-Modified-Since和Etag / If-None-Match)
+ 协商缓存由服务器决定是否使用缓存
+ 若协商缓存失效，那么代表该请求的缓存失效，重新获取请求结果，再存入浏览器缓存中；生效则返回304，继续使用缓存



+ 缓存不存在，直接发请求获取资源。
+ 缓存存在，cache-control没有过期，读取缓存
+ 缓存存在，cache-control过期，携带 If-None-Match(Etag)向服务器请求，如果资源更新，返回200，加载页面
+ 缓存存在，cache-control过期，携带 If-None-Match(Etag)向服务器请求，如果资源没有更新，返回304，使用缓存

#### 5） 三种刷新操作对 http 缓存的影响

正常操作：地址栏输入 url，跳转链接，前进后退等。

手动刷新：f5，点击刷新按钮，右键菜单刷新。

强制刷新：ctrl + f5，shift+command+r。

+ 正常操作：强制缓存有效，协商缓存有效。 
+ 手动刷新：强制缓存失效，协商缓存有效。
+ 强制刷新：强制缓存失效，协商缓存失效。

### 3、 GET 和 POST 的区别。

- 从**缓存**的角度，GET 请求会被浏览器主动缓存下来，留下历史记录，而 POST 默认不会。
- 从**编码**的角度，GET 只能进行 URL 编码，只能接收 ASCII 字符，而 POST 没有限制。
- 从**参数**的角度，GET 一般放在 URL 中，因此不安全，POST 放在请求体中，更适合传输敏感信息。
- 从**幂等性**的角度，GET 是幂等的，而 POST 不是。(幂等表示执行相同的操作，结果也是相同的)
- 从 **TCP** 的角度，GET 请求会把请求报文一次性发出去，而 POST 会分为两个 TCP 数据包，首先发 header 部分，如果服务器响应 100(continue)， 然后发 body 部分。(火狐浏览器除外，它的 POST 请求只发一个 TCP 包)

### 4、HTTP/2 有哪些改进？（很大可能问原理）

- 头部压缩。
- 多路复用。
- 服务器推送。

### 5、跨域问题

#### **CORS**

+ 跨来源资源共享
+ 基本思想：使用额外的HTTP头部让浏览器与服务器进行沟通，从而决定是否接受跨域请求
+ 浏览器在跨域访问时，会自动添加HTTP头信息，或者发起预检请求
+ 关键在于服务器是否做了CORS配置，允许跨域访问。
+ 

### 6、Token-- 服务端身份验证的流行方案

### 7、前端埋点

### 8、每个页面需要计算浏览轨迹，怎么实现

## 前端安全问题

### 

## 兼容问题

1. 选择技术框架/库(jquery)帮助我们把兼容性解决
2. 使用辅助性的工具，比如说css重置以及h5的设置(html5shiv.js、respond.js、css reset、normalize.css、Modernizr)
3. 条件注释、CSS Hack、js 能力检测做一些修补
4. 思维方式上，可以使用渐进增强或优雅降级的方式去对浏览器的兼容问题做相对应的操作

## 适配方案

1、一屏适配

2、数据大屏适配

3、什么是栅格设计？







## vue

**1、指令和修饰符**

+ https://www.cnblogs.com/jiajia-hjj/p/15368484.html



**2、v-if和v-for的问题**

+ https://www.cnblogs.com/jiajia-hjj/p/15368645.html

**3、vue计算属性和侦听器**

+ https://www.cnblogs.com/jiajia-hjj/p/15375516.html

**4、vue 生命周期**

+ https://www.cnblogs.com/jiajia-hjj/p/15375551.html

**5、组件**

**6、组件通讯**

**7、slot**

**8、状态组件**

**9、获取dom**

+ ref="domName"， 用法：this.$refs.domName

**10、怎么理解MVVM、MVM框架?**



**11、vue响应式**

**12、Watcher分类**

**13、vue双向绑定原理**

**14、nextTick的原理**

**15、keep-alive**

**16、修改Vue.js组件对象属性值时怎么触发视图更新?**

**17、vue.js组件中的属性name的作用？**



**20、v-show和v-if指令的共同点和不同点？**

+ 共同点：都能控制元素的显示和隐藏；
+ 不同点：

  + v-show：本质就是通过控制css中的display设置为none，控制隐藏，只会编译一次；
  + v-if：是动态的向DOM树内添加或者删除DOM元素，若初始值为false，就不会编译了。而且v-if不停的销毁和创建比较消耗性能。
+ 总结：

  + 如果要频繁切换某节点，使用v-show(切换开销比较小，初始开销较大)。
  + 如果不需要频繁切换某节点，使用v-if（初始渲染开销较小，切换开销比较大）。

**19.vue的两个核心点**

+ 数据驱动：ViewModel，保证数据和视图的一致性。
+ 组件系统：应用类UI可以看作全部是由组件树构成的。

**vue初始化页面闪动问题**

+ 在vue初始化之前，由于div是不归vue管的，所以代码在还没有解析的情况下会容易出现花屏现象
+ 在css里加上[v-cloak] {display: none;}。浏览器在解析的过程中，发现具有v-cloak的属性隐藏不显示
+ 在根元素加上v-cloak。没有彻底解决问题则再加上style="display: none;" :style="{display: 'block'}"

**为什么使用key?**

+ 使用key来给每个节点做一个唯一标识，Diff算法就可以正确的识别此节点
+ 作用主要是为了高效的更新虚拟DOM

**13.v-on可以监听多个方法吗？**

**14.分别简述computed和watch的使用场景**

**单页面应用和多页面应用区别及优缺点**

+ 单页面应用（SPA），只有一个主页面的应用，浏览器一开始要加载所有必须的 html, js, css。
+ 多页面（MPA），指一个应用中有多个页面，页面跳转时是整页刷新
+ 单页面的优点：
  + 用户体验好，快，内容的改变不需要重新加载整个页面，对服务器压力较小；
  + 前后端分离；页面效果会比较炫酷（比如切换页面内容时的专场动画）。

+ 单页面缺点：
  + 不利于seo，爬出来的全是js；
  + 导航不可用，如果一定要导航需要自行实现前进、后退。（由于是单页面不能用浏览器的前进后退功能，所以需要自己建立堆栈管理）；
  + 初次加载时耗时多；
  + 页面复杂度提高很多。



**18、为什么需要对首屏加载进行优化？**

+ vue需要js渲染，一开始输出页面什么东西都没有，是空白的。html里面是没有结构的，需要js进行解析渲染，把html渲染出来，所以这个操作需要消耗时间
+ js可能会比较大，因为单页面应用，所以js文件比较大，文件比较大的话使得加载速度要比较快，才能尽快的把数据加载回来。慢点的话，加载慢，白屏时间会比较久

**19、vue如何优化首页加载速度**

1. 使用首屏SSR + 跳转SPA方式来优化
   + 首屏SSR :后端渲染，后端先把首页的html结构样式渲染出来
   + 渲染出来后在加上，单页面路由跳转 方式来进行优化
2. 改单页应用为多页应用，需要修改webpack的entry
   + webpack打包多输出几个页面，输出页面分的越细，js所需要的量就越少
3. CDN资源还是很重要的，最好分开，也能减少一些不必要的资源损耗
   + CDN资源分发的方式，减少资源损耗，也可以帮助我们尽可能尽快的拿到最近的资源内容
4. 骨架屏这种的用户体验的东西一定要上
   + 一些页面的效果先显示出来，就不会出现白屏
5. 合理使用缓存
   + 前端缓存，将不变的资源放在缓存里
   + 后端缓存，将不变的资源放在服务器的缓存里，一去请求，不需要去做过多的操作，内容直接发送到前端

**17.vue和jQuery的区别**

18.响应式数组

## vue-router

**1、非路由组件的显示和隐藏**

+ https://www.cnblogs.com/jiajia-hjj/p/15814084.html

**2、`$router`和`$route`的区别**

+ `$router`：VueRouter的实例，路由操作对象，只写对象。可以操作，路由跳转push|go|replace。-----是路由。
+ `$route`：当前处于活跃状态的路由节点，路由信息对象，只读对象。可以获取当前路由的name|path|query|parmas等信息。---是一个路由节点。

**3、路由跳转方式**

+ https://www.cnblogs.com/jiajia-hjj/p/15854492.html

**4、路由传参方式**

+ https://www.cnblogs.com/jiajia-hjj/p/15814297.html

**5、params和query的区别**

+ https://www.cnblogs.com/jiajia-hjj/p/15814297.html

+ query：类似 get请求，刷新参数不会消失。
+ params：需要要name引入跳转
  + 动态路由：属于路径当中的一部分，需要占位符，刷新参数不会消失。
  + 非动态路由：不属于路径当中的一部分，类似 post请求，刷新参数会消失。

**6、动态路由**

+ 路由路径加占位符+params传值（见5）

**7、路由多次执行相同的push报错问题**

+ https://www.cnblogs.com/jiajia-hjj/p/15814327.html

+ 原因：vue-router3.1.0之后, 引入了push()的promise的语法 ，如果没有通过参数指定成功或者失败回调函数,就返回一个promise来指定成功/失败的回调。   且内部会判断如果要跳转的路径和参数都没有变化，会抛出一个失败的promise。
+ 方法：重写VueRouter原型对象的push和replace方法，添加成功和失败的回调。

**10、Vue-router跳转和location.href有什么区别**

答：使用location.href='/url'来跳转，简单方便，但是刷新了页面；
使用history.pushState('/url')，无刷新页面，静态跳转；
引进router，然后使用router.push('/url')来跳转，使用了diff算法，实现了按需加载，减少了dom的消耗。
其实使用router跳转和使用history.pushState()没什么差别的，因为vue-router就是用了history.pushState()，尤其是在history模式下。

**11、vue-router的两种模式**

+ **hash模式**：即地址栏 URL 中的 # 符号
+ **history模式**：window.history对象打印出来可以看到里边提供的方法和记录长度。利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。（需要特定浏览器支持）。



**12、vue-router 是什么?它有哪些组件**

+ vue用来写路由一个插件
+ 组件：router-link、router-view



**13、Vue2中注册在router-link上事件无效解决方法**

+ 使用`@click.native`。
+ 原因：router-link会阻止click事件，`.native`指直接监听一个原生事件。

**14、vue-router 有哪几种导航钩子?**

三种

+ 全局导航钩子，写在'router/index.js文件中
  + **router.beforeEach((to,from,next)=>{})**：前置守卫，跳转前进行判断拦截。（应用场景，如切换或刷新页面判断用户是否已经登录。）
  + **router.beforeResolve((to,from,next)=>{})**：解析守卫，和beforeEach类似。区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
  + **router.afterEach((to,from)=>{})**：后置钩子，跳转之后进行回调。
+ 组件内的钩子，写在组件中
  +  **beforeRouteEnter(to, from, next)**：组件实例还没被创建，不！能！获取组件实例 `this`
  +  **beforeRouteUpdate(to, from, next)**：在当前路由改变，但是该组件被复用时调用，可以访问组件实例 `this`
  +  **beforeRouteLeave(to, from, next)**：导航离开该组件的对应路由时调用
+ 单独路由独享组件，写到指定路由内部，跳到指定路由前调用
  + **beforeEnter**：路由独享守卫，跳到xxx页面前调用

**15、完整的导航解析流程**

1. 导航被触发。
2. 在失活的组件里调用 `beforeRouteLeave` 守卫。
3. 调用全局的 `beforeEach` 守卫。
4. 在重用的组件里调用 `beforeRouteUpdate` 守卫 (2.2+)。
5. 在路由配置里调用 `beforeEnter`。
6. 解析异步路由组件。
7. 在被激活的组件里调用 `beforeRouteEnter`。
8. 调用全局的 `beforeResolve` 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 `afterEach` 钩子。
11. 触发 DOM 更新。
12. 调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数，创建好的组件实例会作为回调函数的参数传入。

**8.vue-router实现路由懒加载（ 动态加载路由 ）**
答:三种方式
第一种：vue异步组件技术 ==== 异步加载，vue-router配置路由 , 使用vue的异步组件技术 , 可以实现按需加载 .但是,这种情况下一个组件生成一个js文件。
第二种：路由懒加载(使用import)。
第三种：webpack提供的require.ensure()，vue-router配置路由，使用webpack的require.ensure技术，也可以实现按需加载。这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。

**14、Vue里面router-link在电脑上有用，在安卓上没反应怎么解决？**
答：Vue路由在Android机上有问题，babel问题，安装babel polypill插件解决。

**15、RouterLink在IE和Firefox中不起作用（路由不跳转）的问题**
答: 方法一：只用a标签，不适用button标签；方法二：使用button标签和Router.navigate方法

## vuex

### 1、什么是vuex

+ 状态管理，集中存储管理所有组件的状态
+ 主要存储一些全局变量，放接口数据，多处使用一个接口
+ 用户信息，购物车商品

### 哪种功能场景使用它

+ 集中式管理项目中组件公用的数据，如用户信息，购物车商品
+ 如果项目过大：组件过多，接口也很多,可以让vuex实现模块化开发

### 优势和劣势

+ 优势：可以全局共享数据和方法（action的dispatch，mutation的commit）。方便统一管理，state上的数据是响应式的。
+ 劣势：页面刷新后，state的变量会被清空，不具有数据持有性。

### state数据消失的原因

https://www.cnblogs.com/jiajia-hjj/p/13882849.html

+ 因为store的数据是保存在运行内存中，当页面刷新时，页面会重新加载vue实例，store里面的数据就会被重新赋值

### vuex-刷新页面state数据消失（数据持久化）

方法一：

+ 将state中的数据放在浏览器sessionStorage和localStorage、cookie中

  ```js
  created(){
      //在页面刷新时将vuex里的信息保存到localStorage里
      window.addEventListener("beforeunload",()=>{    		localStorage.setItem("messageStore",JSON.stringify(this.$store.state))
                                                })
  
      //在页面加载时读取localStorage里的状态信息
      localStorage.getItem("messageStore") &&this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("messageStore"))));
  }
  
  ```

+ 插件：vuex-persistedstate、vuex-along



### vuex有哪几种属性？

+ state：存全局的变量
+ getters：计算属性
+ mutations：更改state值,this.$store.commit('xxx',params) 
+ actions:获取异步数据,this.$store.actions
+ modules:模块

### 辅助函数

https://www.cnblogs.com/jiajia-hjj/p/16008643.html

+ mapState、mapGetters、mapMutations、mapActions

### Vuex中解决不同模块命名冲突的问题namespaced: true

https://www.cnblogs.com/jiajia-hjj/p/16008661.html

## axios

## 权限管理问题

## 优化问题

1、如何做好不频繁触发浏览器的回流与重绘？

2、防抖节流

前端性能优化

1. 减少 HTTP 请求
2. 减少 DOM 操作
3. 避免不必要的重绘与重排(回流)（可以用定位，让这块区域脱离文档流，不会影响其他的布局）
4. 优化 CSS 选择器（从右向左匹配）  （选择器要尽量的简短，不要写一长串）
5. CSS/JS minify，减少文件体积  （文件压缩）
6. 开启 Gzip 压缩
7. 将 CSS 放到顶部，JavaScript 放到尾部
8. 缩图片以及使用 CSS Sprite  （无损压缩图片、精灵图->减少请求次数）
9. 使用 CDN 加速，适当进行文件缓存（ CDN：内容分发，将内容分发到各个地方，请求的人可能更快的请求到当地的数据文件；）
10. 合理控制 cookie 大小（每次请求都会包含 cookie）

