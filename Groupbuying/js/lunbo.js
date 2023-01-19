window.addEventListener('load',function(){



//1.鼠标经过，箭头显示
var arrowr=document.querySelector('.lunbo-arrowr');
var arrowl=document.querySelector('.lunbo-arrowl');
var lunbo=document.querySelector('.lunbo');

lunbo.addEventListener('mouseover',function(){
    arrowl.style.display="block";
    arrowr.style.display="block";

})
lunbo.addEventListener('mouseout',function(){
    arrowl.style.display="none";
    arrowr.style.display="none";

})


//2.动态生成小圆圈
var ul=lunbo.querySelector('ul');
var ol=lunbo.querySelector('ol');

for(var i=0;i<ul.children.length;i++)
{
    //创建一个Li
    var li=this.document.createElement('li');
    //给小圆圈设置自定义属性
    li.setAttribute('index',i);
    //把li插入到ol里面
    ol.appendChild(li);
    
   //3.小圆圈的排他思想
   if(i===0)
   {
    ol.children[0].className='rent';
   }
  li.addEventListener('click',function(){
   //把所有li的类名清除
for(var i=0;i<ul.children.length-1;i++)
{
 // 注意，这里长度不一致时就会出现错误
 ol.children[i].className='';
}
//留下我自己
this.className='rent';
})
}

//3.点击右侧按钮，图片滚动
function animate(obj,target,callback){
    // 先清除以前的一个定时器，就保留当前的一个定时器即可
     clearInterval(obj.timer);
     obj.timer=setInterval(function(){
        // 步长值写到定时器里面
        var step=(target-obj.offsetLeft)/10;
        // 去除步长值小数问题
        step=target>=0?Math.ceil(step):Math.floor(step);
        if(obj.offsetLeft!=target){
            obj.style.left=obj.offsetLeft+step+"px";
        }else{
            clearInterval(obj.timer);
        }
    },20);
    //每个30ms不断调用函数
}
// 克隆第一张图片到最后一个去
 var first=ul.children[0].cloneNode(true);
 ul.appendChild(first);
var num=0;
var circle=0;
lunbowidth=lunbo.offsetWidth;
arrowr.addEventListener('click',function(){
    if(num===ul.children.length-1)
    {
        ul.style.left=0;
        num=0;
    }
num++;
circle++;
animate(ul,-num*lunbowidth);
//也让小圆圈跟着变化
if(circle===ol.children.length)
{
    circle=0;
}
for(var i=0;i<ul.children.length-1;i++)
{
 // 注意，这里长度不一致时就会出现错误
 ol.children[i].className='';
}
//留下我自己
ol.children[circle].className='rent';
})

//4.点击左侧按钮，图片滚动
arrowl.addEventListener('click',function(){
if(num===0)
{
    num=ul.children.length-1;
    ul.style.left=-num*lunbowidth+'px';
   
}
    num--;
    animate(ul,-num*lunbowidth);
    circle--;
    if(circle<0)
    {
        circle=ol.children.length-1;
    }
//把所有li的类名清除
for(var i=0;i<ul.children.length-1;i++)
{
 // 注意，这里长度不一致时就会出现错误
 ol.children[i].className='';
}
//留下我自己
ol.children[circle].className='rent';


})



//5.自动播放,制作定时器
//鼠标经过就停止定时器,离开就开启定时器
//定时器
var timer=this.setInterval(function(){

    arrowr.click();

},2000);




lunbo.addEventListener('mouseleave',function(){
    timer=setInterval(function(){
        arrowr.click();
    },2000);
    });

lunbo.addEventListener('mouseenter',function(){
//要清除上一个定时器
 clearInterval(timer);
 timer=null;
})


//6.点击小圆圈，得到小圆圈对应的图片

for(var i=0;i<ol.children.length;i++)
{
    ol.children[i].addEventListener('click',function(){
    //获取当前小圆圈的属性
    var index=this.getAttribute('index');
    animate(ul,-index*lunbowidth);

    })
}


//猫眼电影的轮播
//1.鼠标滑动，箭头出现
var movie_arrowl=this.document.querySelector('.movie-arrowl');
var movie_arrowr=this.document.querySelector('.movie-arrowr');
var movie_lunbo=this.document.querySelector('.movie-lunbo');

movie_lunbo.addEventListener('mouseover',function(){
movie_arrowl.style.display='block';
movie_arrowr.style.display='block';

})
movie_lunbo.addEventListener('mouseout',function(){
    movie_arrowl.style.display='none';
    movie_arrowr.style.display='none';
    
    })

//2.点击右侧箭头，ul滑动
var futuremovie=this.document.querySelector('.futuremovie');
var movie_future_ul=futuremovie.querySelector('ul');
var hotmovie=this.document.querySelector('.hotmovie');
var movie_ul=hotmovie.querySelector('ul');
var movie_lunbo_width=movie_lunbo.offsetWidth;

movie_arrowr.addEventListener('click',function(){

animate(movie_ul,-movie_lunbo_width);
})
movie_arrowl.addEventListener('click',function(){

    animate(movie_ul,0);
    })
    movie_arrowr.addEventListener('click',function(){

        animate(movie_future_ul,-movie_lunbo_width);
        })
        movie_arrowl.addEventListener('click',function(){

            animate(movie_future_ul,0);
            })




//鼠标滑过，三角形改变箭头
var movie_hot=this.document.querySelector('.movie-hot');
var movie_future=this.document.querySelector('.movie-future');
var san1=this.document.querySelector('.san1');
var san2=this.document.querySelector('.san2');

movie_hot.addEventListener('mouseover',function(){
//排他思想
san2.style.display='none';
san1.style.display='block';
//ul显示
futuremovie.style.display='none';
hotmovie.style.display='block';
})
movie_future.addEventListener('mouseover',function(){
    //排他思想
    san1.style.display='none';
    san2.style.display='block';
    futuremovie.style.display='block';
    hotmovie.style.display='none';

    })
    
























})