//1. 鼠标经过轮播图模块，左右按钮显示，离开隐藏左右按钮
window.addEventListener('load',function(){
    //1.获取元素
    var anniu=document.querySelector('.anniu');
    var arrowl=document.querySelector('.arrow-l');
    var arrowr=document.querySelector('.arrow-r');
    var focus=document.querySelector('.focus');
    //2.注册事件
    var timer=setInterval(function(){
        // 手动调用点击事件
        arrowr.click();
    },3000)
    focus.addEventListener('mouseover',function(){
       arrowl.style.display='block';
       arrowr.style.display='block'; 
    // 注意清掉动画
    clearInterval(timer);
       timer=null;
    })
    focus.addEventListener('mouseout',function(){
        arrowl.style.display='none';
        arrowr.style.display='none'; 
        // 自动播放功能
// 当鼠标没有在的时候，就自动播放，当鼠标经过的时候，自动播放就停止，这里需要定时器
// 自动播放了轮播图，就相当于点击了右侧按钮,这是一个定时器
var timer=setInterval(function(){
    // 手动调用点击事件
    arrowr.click();
},3000)
// 鼠标经过就停止定时器，离开就开启定时器
        
    })
    //2. 动态生成小圆圈 有几张图片就生成几个小圆圈
    var ul=this.document.querySelector('ul');
    var ol=this.document.querySelector('ol');
    //获取图片的个数
    for(var i=0;i<ul.children.length;i++)
    {
        //创建一个li
        var li=this.document.createElement('li');
        // 记录当前小圆圈的索引号
        li.setAttribute('index',i);
        //把li插入到ol里面去
        ol.appendChild(li);
        // 小圆圈的排他思想，在生成小圆圈的同时设置绑定事件
// 点击当前小圆圈，就添加current
li.addEventListener('click',function(){
// 干掉所有人，把所有li 清除类名
for(var i=0;i<ol.children.length;i++)
{
ol.children[i].className='';
}
// 留下我自己
this.className='crent';

}) 
    }
 ol.children[0].className='crent';

    




    // 克隆第一张图片放到最后面
    var first=ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var circle=0;







    // 4.点击右侧按钮，就让图片滚动一张
    var num=0;
    var focuswidth=focus.offsetWidth;
    arrowr.addEventListener('click',function(){   
        // 如果做到了最后一张，ul就快速复原left为0
        if(num===ul.children.length-1)
        {
            ul.style.left=0;
            num=0;
        }
        num++;
        animate(ul,-num*focuswidth);
        circle++;
        if(circle===4)
        {
            circle=0;
        }
        //先清除其余小圆圈的类名
for(var i=0;i<ol.children.length;i++)
{
    ol.children[i].className='';
}
//保留当前小圆圈的类名
ol.children[circle].className='crent';

        })

// 5.点击左侧按钮
arrowl.addEventListener('click',function(){
    if(num===0){
        num=ul.children.length-1;
        ul.style.left=-num*focuswidth+'px';
    }
    num--;
    animate(ul,-num*focuswidth);
    // 6.点击左侧按钮，小圆圈跟随一起变化，可以再声明一个变量控制小圆圈的播放
    
    circle--;
    if(circle<0)
    {
        circle=3;
    }
    //先清除其余小圆圈的类名
    for(var i=0;i<ol.children.length;i++)
    {
        ol.children[i].className='';
    }
    //保留当前小圆圈的类名
    ol.children[circle].className='crent';
    
    
            })

// 让图片移动位置，点击某一个小圆圈，就获得该小圆圈的索引号
for(var i=0;i<ol.children.length;i++)
{
ol.children[i].addEventListener('click',function(){
    var gg=this.getAttribute('index');
    animate(ul,-gg*focuswidth);
})
}






        })

        
    






       