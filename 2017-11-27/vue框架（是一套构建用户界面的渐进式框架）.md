#### 使用vue 直接<script src="./src/vue.js"></script>
#### 特点

```
1.响应的数据绑定：注意力都关注在数据的变化（业务逻辑），主要数据法发生变化，页面会自动更新
    a.根据数数生成li，把数据填充到模板中
    b.和用户交互会产生数据（添加事件）
    c.添加数据， arr.push();
    d.在重新渲染页面
    e.arr.pop(),删除
    f.当每一次数据发生变化时，
    
    vue 模式
    
    
    <div v-bind : title = "tip" id="arr">
        {{ message }}
        <img :src="_src" />
    </div>
    let arr = ['miaov' , 'ketang'];
    new Vue({
        el : '#list'  // 相当于document.getElmentById('list')  el==element(模板位置)
        data : {
            arr : arr ,
            message : 'hellow'，
            tip： '这是一个提示，我很长很长很长'，
            customSrc : './img/'jpg'
        }
    })
    
    
    指令：v-bind  (简写为 ：) vue赋予这些指令的特殊功能
    写在标签上作为行间的自定义属性，以v-开头，是vue提供的特殊属性，用来完成某项功能的
    v-for ==》 for 循环,遍历，枚举，拿到两种值，数组中的每一个值，值对应的下标： key  value
    语法: v-for = "value, key in 数组 ",（获取value和key）
    v-for ="value in 数组"  （值获取value值）==》
    在标签行间里写上这个语法
    <li v-for = "item.key in list">{{i}} + {{ item }}</li>
    
    插值 ：{{  插值  }}
      
     v-show=”表达式“,切换display：none还是block
     值为true,元素显示，值为false，元素不显示
     v-if=“表达式”  ，
     表达式的值为true,则渲染页面，
     表达式的值为false，则元素不渲染
     
     
     切换元素显示隐藏用 v-show
     数据没有就不渲染结构的用 v-if，
     数据称为状态

2.可组合的视图组件
```
#### 作用域
```
    变量的作用（访问）范围
    var names='zhangsan'
    function henan(){
        var names = "河南张三"
    }
    function hebei(){
        var names = "河北张三"
    }
    //函数必选先调用
    henan()；
    hebei（）；
    console.log(names); // 全局
```
#### 事件

```

绑定事件指令 v-on（简写为：@）
语法：v-on:事件名='表达式 | 事件处理函数'
            click
            mouseover
            mouseout
   v-on:click="message='miaov'"//改变值得 例子
v-on:事件名=’changeMessage‘
把定义的时间处理函数放在一个地方，选项对象中的methods中
methods：{  //方法
   changeMessage:function(){//事件处理函数
        this.message ='即将改变成的值'
   } 
} // 这个方法要写在data数据的下方，是和data数据同级

内部会把data中的数据放在new Vue创建的实例身上


```

###### 案例（显示/隐藏）

```
<div id="app">
    <button v-on:click = "isShow = !isShow">显示/隐藏元素</button> // 直接写在行间
    <button v-on:click = "chang">点击显示/隐藏元素</button> // 方法
    <div v-show="isShow">
        被操做的元素
    </div>
</div>
<script>
    new Vue({
        el : "#app",  //那个模块下的
        data:{
            isShow : true  //初始值（默认显示）
        },
        methods : {
            chang:function () { // 方法
                this.isShow = ! this.isShow  // 改变display的值（直接取反)
            }
        }
    });
</script>
```

##### 事件对象

```
知道这个对象的详细信息
事件对象是内部在调用这个时间处理函数的时候，作为第一个参数传过来
开发者所要做的就是通过一个形参接受

class
	动态的计算
		语法：:class="{class名字:表达式}"
			如果表达式为true，则这个元素添加前面的class
			如果表达式为false，则不添加
```
##### 字符串方法
```
let str='miaoverketang';//对这个字符串进行增删改查（根据需求出发，再找方法来处理）
1.给定下标找到对应的字符 （charAt(index)）
2.给定一个字符串，在原字符串中出现的位置 
indexOf(str)
3.截取字符串，给定一个开始位置和结束位置 
slice(start,[end]),==>能接受负值  substring(start,[end])==》不能接受负值
4.截取字符串，给定一个开始位置，指定截取几个  
substr(start,length)
5.过滤指定的字符串  
replace(str/reg ,替换的值/function(){})
6.变大小写
toUpperCase()  / toLowerCase()
7.转成数组
split(‘’)
8.去除前后空格  
trim()
归类： 
    删：
        3.截取字符串，给定一个开始位置和结束位置
        4.截取字符串，给定一个开始位置，指定截取几个
        8.去除前后空格
    改：
        5.过滤指定的字符串
        6.变大小写
        7.转成数组
    查：
        1.给定下标找到对应的字符 
        2.给定一个字符串，在原字符串中出现的位置
```
#### 数组的方法

```
如何学习一个方法？？？
1.这个方法是属于那一类数据的
2.这个方法作用是什么？
3.这个方法接受的参数，类型，个数，必填/可选
4.放回值，类型，值是什么
5.调用这个方法之后，对原数据有没有负作用（产生影响）


操作数组有哪些方法：
例子：
let arr =['miaov','ketang','leo'];

1.向数组后面追加一个到多个值，
    arr.push(一个到多个值)==>数组会改变，返回数组的长度
2.向数组的前面追加一个到多个值
    arr.unshife(一个到多个值) == 》数组会改变，返回数组的长度
3.删除第一个
    arr.shift() ==>数组会改变
4.删除最后一个
    arr.pop() ==》数组会改变
5.截取数组：给顶开始位置和结束位置
    arr.slice(start,[end]) ==》数组不改变
6.反转数组
7.遍历数组
8.合并数组
9.删除指定位置的值 
    splice(start,删除的个数)==》删除的值组成的新数组
10.替换指定位置的值
    splice(start,删除的个数，替换的值)
11.遍历数组（遍历，枚举，循环，数组，拿到数组每一个值，以及值对应的下标）
arr.map(function(item,index){
    console.log(item)
    return item+1;
}) ==>映射关系,原数组有几项，返回的数组就有几项（undefined==》函数没有返回值）
map返回的新数组中的值是回调函数执行后的返回值
出现undefined的情况：
    1.定义变量未赋值
    2.函数没有返回值
    3.对象没有指定属性
arr.filter(function(item.index){
    console.log(item,index);
    return item > 3; //根据这个条件的真假，决定这
})==>过滤某个数组的，根据某个条件过滤


arr.forEach(function(){})的例子：
//    需求：求出年龄的总和+体重的总和
    let arr = [
        {
            age: 20,
            weight:100
         },
        {
            age: 30,
            weight:110
        },
        {
            age: 40,
            weight:120
        }
    ];
    let ages=0;
    let weight=0;
   arr.forEach((item)=>{
      ages +=item.age;
      weight += item.weight;
   });
    console.log(ages,weight);
    
reduce（）===》有三个参数,把数组中的每一项累加，上一次累加的结果作为下一次的初始值
let arr=[1,2,3,4,5,6,7]
let total=arr.reduce(function(item1,item2){
    return item1+item2;
});==>回调函数的第一个参数，就是上一次函数执行后的返回值
 console.log(total);==>total
```
#### 双向数据绑定 

```
数据---》模板-----》数据
在模板过程中，需要添加事件来监听，只有触发这个事件，才能改变数据
时时数据改变触发--》oninput
input textarea不需要手动的写input监听，用v-model="",直接在内部接听
v-model根据input的类型，转成不同的值
input位textt,转成value,input为checkbox,radio,则转成checked

MVVM模式--> m model 数据
        v view 试图
        vm view-model  试图-模型
    
事件修饰符，
    语法：@
    .stop //阻止冒泡
    .once  //只会触发一次
    .enter
    .tab
    .delete
    .up
    .down
    .exact

```

#### 计算属性

```
就i是一个属性，用来写关于data的一些逻辑的，把处理data的逻辑
computed:{
    
}
```

```
object.defineProperty(对象，key,描述)，
描述是一个对象{
    value : 'ketang' // 改对象中的值
    writtable : false //值是否改写，false==>不能改写，true ==> 能改写
    
}

//寸  取 描述
存 会触发setter对应函数set
取 会触发getter对应的函数get
object.defineProperty(对象，描述,{
    get : function(){
        return val;
    },
    set : function(){
        
    }
    
})，
```
##### 函数调用的方式

```
1.直接调用 this==>window
2.事件触发调用 this==>触发时间的元素
3.new调用 this==》通过函数创建实例
4.定时器 this==>window
5.call / apply this==>call / apply 的第一个参数
6.作为对象的方法 this => 调用方法的对象
函数中this值，不是定义函数的时候确定，而是调用的时候确定的

ES6 箭头函数
()=>{}
箭头函数中的this实在定义的时候绑定哪个的，这个箭头函数所在作用域中的值
箭头函数中的this实在定义的时候就确定了
this的值是在箭头函数所在作用域中的this
```


#### 完整的URL

```
客户端--浏览器--》www.baidu.com--》DNS查询（查域名，对应的ip）--> 
search ： 查询数据，发送给服务器
hase: 记录数据，不发送给服务端
要想在页面中去向服务器拿数据，需要在页面内发送请求，使用一种技术，ajax
let xhr = new XMLHttpRequest();

let url='127.0.0.1/miaov/1.php'

xhr.open('get' , url, true);
xhr.onload = function(){
    //ajac请求回来后触发这个事件
}
xhr.send(); //发送（请求，获取方式准备好了就发送）
requset heade:
    get  path http
    host: 

```
#### 数据持久化

```
localStorage // 全局对象

getItem(key)  // 获取，没有取到的时候是 null
setItem(key,vaue) // 设置，修改
removeItem (key) // 删除
let list = localStorage.
//如果你存在的对象，都会被转成字符串，要转一下
localStorage.setItem('list',JSON.stringify({num : a}))
```
#### vue组件

```
<select> 下拉框 </select>
组件是自定义的，可定制的
数据，结构，内部发生的事情
```
#### vue组件的方法

```
注册组件，
    语法：Vue.component(组件的名字，组件的选项)
    
    Vue.commonent('custom',{
    props：['title','list']; //x显示的写出要接收key的名字
        template : `<div>hello</div>` //必须加div，用div包将要写的内容包起来
    })
    new Vue({
        el: '#app'
    })
    
    <custom ：title="newsTilte" :list="newsList"></custom>  //将这个写在页面里面
    注：，在模板中使用的时候必选使用烤串命名，不能使用驼峰命令
    
    父组件  --》 子组件 。用props
    子组件 --》 父组件 ，用自定义事件
    this.$emit('ok') // vue组件内部发布事件，没有加$是自定义
    
```
#### 订阅发布模式

```
页面中：
    document.addEventListener('click',function(){])  // doument==>发布者，function是订阅者
发布者发布的事件，要在组件内写，不能组件外面

例子：
<div id="app">
   <button-content
           :title="button"
           :list="content"
           @ok="parentOK"
   ></button-content>
    <div v-show="isLogin">
        <button>发布</button>
        <div>这是发布的内容</div>
    </div>
</div>
<script>
    let button='发布';
    let content = '这是发布的内容';
    Vue.component('button-content',{
        props:['title','list'],
        template:`<div>
                        <button @click="okHandle">{{title}}</button>
                       <div >{{list}}</div>
                </div>
        `,
        methods:{
            okHandle(){
                this.$emit('ok');  //内部发生的事情，谁关心谁订阅
            }
        }
    } );
    new Vue({
        el : '#app',
        data:{
            button,
            content,
            isLogin : false
        },
        methods:{
            parentOK(){
               this.isLogin = true;
            }
        }
    });
</script>

注： ：style = '{color:red}'
```
#### 组件内部的改变

```
内部的变化必须要放在内部，不能放在内部
可以在子组件内部定义一个data ，必须是一个函数
data (){
    return {
        color:'yellow'
    }
}
```

#### 定制结构

```
每一个组件都是独立的
在模板中使用组件，写在一对标签组件张的内容，会被当作组件定制的结构
在组件中就要把这个内容插入到指定的位置，

<slot></slot> //单个插槽，定制内容，将组件中的内容放到这个标签中间，要是在页面中有设置则走设置，要是没有设置，则走这个标签中的内容

//多个卡槽的用法
<em slot='h2'></em>
<slot name='h2'></solt>

//批量插入
<template slot='h2'>
    <em slot='h2'></em>
    <em slot='h2'></em>
    <em slot='h2'></em>
    <em slot='h2'></em>
</template>
```
#### 作用域的问题

```
在页面中写的都属于父组件，在sript中写的都是子组件

在父组件中有一个特殊的特性，slot-scope 的 <template>

例子：
<template slot-scope="props"></template>  // 父组件
//相当于将这快的作用域变成子级管理，不再是父级管理
子组件要传 :title="title"

****当定制内容的时候，作用域是父组件的，但是要渲染子组件中的数据，
需要用slot标签传到定制的内容上，定制内容使用slot-scope来接收

```
#### 编写可复用的组件

```
prop允许外部环境传递数据给组件
事件允许从组件
```
#### 安装脚手架

```
工具： npm i vue-cli -g
m命令行中敲 vue -v
出现版本号则安装成功
vue init webpack project(项目名称)
cd  进入 project
先安装模块版 npm i
启动项目 npm run dev
```

#### 脚手架开发介绍

```
1.开发的时候，在src目录下开发
2.main.js是整个应用的入口js，启动应用在这里完成
3.App.vue是整个应用的跟组件


当使用另一个组件的时候，要在当前这个组件中先注册，
选项参数中有一个com'po'net
```

```
mutation必须是同步的函数就是说提交一个mutation之后，立马要把state的值改了，
不能再mutation中写任何异步的操作，当使用异步操作的时候，因为只要提交一个mutation，
就会有一条记录，记录记得时候，state的值还没有改变

actions:所有的异步操作都要放在action中

actions:{
    changeMutation(state,payload){ 
    //关于改变状态n的异步操作
        setTimeput( ()=>{
        let o = {
            k:payload.k + 1000
        }
        store.commit('changeN',o)
        })
    }
}
```

```
npm i express --save //  

npm i axios --save  // 安装，请求ajax(异步)
用法：Axios.get(url).then(function(){})
```
