
let C={};//自定义空数组
//获取鼠标在在元素上的坐标
C.getOffset = function(ele){
    let mouse = {x:0,y:0};
    ele.addEventListener('mousemove' , function(e){
        let {X,Y} = C.eventW(e);
        mouse.x=X;
        mouse.y=Y;
    });
    return mouse;
};
//坐标系转换
C.eventW=function(ev){
    let {pageX,pageY,target} = ev;
    let{left ,top} = target.getBoundingClientRect();
    return {X:pageX - left, Y:pageY-top};
};

//角度转弧度
C.toRad=function (angle) {
    return angle*Math.PI/180
};
// 弧度转角度
C.toAngel=function (rad) {
    return rad*180/Math.PI;
};