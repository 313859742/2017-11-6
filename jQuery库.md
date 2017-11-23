
### 选择器
1.引入jquery
```
$()-->function $(){} //获取元素
$('.box')  //class 选择器
$('#box')  //id 选择器
$('input[type="button"]')   //属性选择器,选择所有按钮为button的input
$('input[type !="button"]')   //属性选择器,除了按钮为button的input（过滤button的按钮）
$("span:nth-of-type(2)")  //获取到同层级的 span 的第二个元素

```
2.隔行变色
```
$('li:odd').css({background:'red'})  // 从0 开始，看上去是偶数，其实是奇数，奇数选择器
$('li:even').css({background:'yellow'})  // 从0开始，（看上去是奇数，）偶数选择器
$('li:eq(2)').css({background:'green'})  // 伪类选择器 eq(下标)，找指定范围的元素
$('li:gt(2)').css({background:'green'})  // gt(下标)2以下的，不包含2
$('li:lt(2)').css({background:'pink'}) //lt(下标)2以上的，不包含2
```
3.eq--->jQuery对象

```
如果想要使用jQuery就要用eq，才能用jQuery的方法，不加就是原生的js
JQ对象转原生的使用下标即可，原生的对象砖JQ对象使用$()包一下即可
```
### 属性操作
1.innerHTML--->html
```
可读可写
$('#box').html('45566');
$('#box').html('<p>1223</p>');
```

2.innerText --->text()  //专门获取文本

3.value --->val()  //input 的值，可读可写

4.style.css /cssText--->css('width' , '100px')  //只写第一个参数，是获取，第二个参数是设置
//如果写成对象的形式，则是批量

5.attr属性(自定义属性)---->getAttribute + setAttribute  //结构上的属性，通过attr拿到

6.removeClass  清除class样式

7.addClass   添加class样式

8.jq.index( 可以选填范围参数，例子：'input')  找到当前元素所在的位置（根据父级元素中的同级兄弟元素的位置）

### 点击选择
$('input[type="chechbox"]').prop('checked',false) //
将已选择的取消，变成没有选择的


```
let inputs=$('input[type="chechbox"]');

for(var i=0;i<inputs.length,i++){

    if(inputs.eq(i).prop('checked') ){
        
    }
}
```
### each(JQ的循环，里面有个回调函数)

```
function（（i,e）=>{
    $(e).click=(function(){
        $(this).css({
            background:'red;
        })
    })
}） //i-->index   e-->element
```
### DOM(文档，对象，模型)
：根据docment提供的API，赋予开发者操作页面的能力

1.第一个元素

```
a. first()
b.$('li').eq(0).css('')
```


2.最后一个元素


```
a. last()
b.
```


3. 兄弟元素

```
next()  //下一个元素
prev()   // 上一个元素
siblings()  // 所有的兄弟
$('li').eq(1).sibling('')  // 排除下标位于当前的这个元素

```


4. 父级

```
closest('.a')  // 查找距离自己最近的class为a的元素，会找自身，自身没有找父级，父级没有一级一级往上找
```


5. 子级

```
children()  //子级
find('li')   //用find将代码快缓存，从这个代码块下获取，将所有的都会查找出来，不会只查找一层（节约性能）
```


6. 增，删，改，查


```
增（创建元素）： 
let $li=$(`<li></li>`);
append（） // 往最后一条添加元素
insertBefore()    // 将元素放到第一条
父级.prepend('插入的元素')  // 结果放到第一条

删  remove();
```
### Sizzle (选择器，JQ中集成了它)

```
width()//宽度
height() //高度
innerHeight()/innerWidth()  //(包含padding)
outerWidth()/outerHeight(200,true)  //（包含padding ,  border）
注：不写第二个参数，则直接是200px,,写了第二个参数，则包含margin,padding,border,width/height
offset().left/top   //绝对位置
position().left/top  // 相对于定位父级的距离
scrollTop()/scrollLeft()  //滚动距离
get(0) ===[0] //get 等同于下标
scrollHeight // 内容撑开高度

```
### 按需加载（滚到哪里？加载到哪？）
```

```

### 事件（JQ中的事件都是基于on这个方法，都是事件绑定）

```
click() //点击事件的书写方式
$('document').click(function(){}) 或者 $('document').on('click',function(){})
off() // 解除绑定事件，需要给哪个元素解除，就给哪个元素后添加
trigger(' ') // 触发器，可以调用别处的事件
ev.preventDefaule();  // 解除浏览器的默认行为
ev.stopPropagation(); //阻止冒泡
return false;//  既能阻止冒泡，也能阻止默认行为
ev.originalEvent  //可以获取到原生的事件对象
```
##### 运动（运动基于animate）

```
hide（500） //隐藏，500表示隐藏的事件，运动效果
注： hide（'slow'） // 慢隐藏
toggle(500) // 改变宽高，透明度，带运动效果隐藏，在点击展开
slideDown（） // 从上往下展示
slideToggle（）//改变高度
fadeToggle（800）//只改透明度
animate({  // 改变宽高，第二个参数是时间，自定义,delay(1000)-->延迟1s时间
    width:300,
    height:300,
}，1000).delay(1000).animate({
    height：600，
});

队列的概念：JQ中的运动都是按照队列来排列的，（即每点一次机会记录一次，连续点击多次，会全部记录下来，每一次执行完才会执行下一次）
stop() // 阻止前面的运动（即多次触发效果运动，在运动前加stop(true,true),2个true是立即完成上面一次的任务，然后开始本次任务）
```
#### 滚屏(一滚滚一屏)

```
body,html{
    overflow-y:hideen;
}
#box{
    positiin:absolute;
    top:0;
    left:0;
}
let iH = $(widon).innerHeight;
let iW= $(window).innerWidth;
let num=0;
let onOff = true;
document.onmousewheel=function(ev){
    if(onOff){
        onOff = false;
    }
    if(ev.eheelDelta > 0){
        num --;
        if(num < 0) num = 0;
    }else{
         num ++;
    }
    $('#box').animate({
        top : -num * iH
    },800,function(){
        onOff = true;
    })
}
```
#### extend（浅拷贝  |  深拷贝 | 编写插件的接口）

```
let obj = {name: 'hh',obj : 'web'};
let obj2 = {arr:[1,2,3,4]};
let obj3=$.extend(obj,obj2);  //浅拷贝
let obj3 = $.extend(true,obj,obj2); // 深拷贝
obj3.arr.push(5);

$.extend（true） // 第一个参数为true，则是深拷贝
```
#### 插件

```
let str = '   adgggg  ';

$.extend({
    trimRight:function(str){
        return str.replace(/\s+$/g,'');
    }
})
$.trimRight(str);
```


```
some() //匹配里面是否有这个内容，有返回true,没有则返回false;
在JQ中添加上这连个参数，匹配成false
processData:false; // 
contentType:false;  //
```


