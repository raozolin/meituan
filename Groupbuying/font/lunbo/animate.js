function animate(obj,target,callback){
    // 先清除以前的一个定时器，就保留当前的一个定时器即可
clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        // 步长值写到定时器里面
        var step=(target-obj.offsetLeft);
        // 去除步长值小数问题
        step>0?Math.ceil(step):Math.floor(step);
        if(obj.offsetLeft>=target){
            // 停止动画，本质是定时器
            clearInterval(obj.timer);
            // 回调函数
            if(callback)
            {
                callback();
            }
        }
        // 把每次加1改为步长值
        obj.style.left=obj.offsetLeft+step+'px';
    },30);
}