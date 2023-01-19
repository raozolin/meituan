// 头部导航条

//1.鼠标经过，颜色变黄
//获取元素
var vcenter=document.querySelector('.nav-center');
var change_city=document.querySelector('.change_city');
var other=document.querySelector('.other');
var login=document.querySelector('.login');
var chuck=document.querySelector('.zhuce').querySelector('a');
//注册事件
other.addEventListener('mouseover',function(){
    this.style.color='#FE8C00';
    this.style.cursor='pointer';
})
other.addEventListener('mouseout',function(){
    this.style.color='#999';
    this.style.cursor='default';
    
})
login.addEventListener('mouseover',function(){
    this.style.cursor='pointer';
})
login.addEventListener('mouseout',function(){
    this.style.cursor='default';
    
})

chuck.addEventListener('mouseover',function(){
    this.style.color='#FE8C00';
    this.style.cursor='pointer';
})
chuck.addEventListener('mouseout',function(){
    this.style.color='#999';
    this.style.cursor='default';
    
})
//2.header 的鼠标经过下拉菜单
//获取元素
//第一个
var di1=document.querySelector('.di1');
var a1=di1.children[0];
var dl1=di1.children[1];
//注册事件
di1.addEventListener('mouseover',function(){
   a1.classList.add('mine-h-add');
   dl1.style.display="block";
})
di1.addEventListener('mouseout',function(){
    a1.classList.remove('mine-h-add');
    dl1.style.display="none";
 })
 //第二个
var ss=document.querySelector('.ss');
var as=ss.children[0];
ss.addEventListener('mouseover',function(){
    as.style.color='#FE8C00';
})
ss.addEventListener('mouseout',function(){
    as.style.color='#999';
})
//第二个
var di2=document.querySelector('.di2');
var a2=di2.children[0];
var dl2=di2.children[1];
//注册事件
di2.addEventListener('mouseover',function(){
   a2.classList.add('mine-h-add');
   dl2.style.display="block";
})
di2.addEventListener('mouseout',function(){
    a2.classList.remove('mine-h-add');
    dl2.style.display="none";
 })
 //第三个
 var di3=document.querySelector('.di3');
var a3=di3.children[0];
var dl3=di3.children[1];
//注册事件
di3.addEventListener('mouseover',function(){
   a3.classList.add('mine-h-add');
   dl3.style.display="block";
})
di3.addEventListener('mouseout',function(){
    a3.classList.remove('mine-h-add');
    dl3.style.display="none";
 })

//第四个
var di4=document.querySelector('.di4');
var a4=di4.children[0];
var dl4=di4.children[1];
//注册事件
di4.addEventListener('mouseover',function(){
   a4.classList.add('mine-h-add');
   dl4.style.display="block";
})
di4.addEventListener('mouseout',function(){
    a4.classList.remove('mine-h-add');
    dl4.style.display="none";
 })


 //推荐名宿版块
 var lis=document.querySelector('.hotel-city').querySelector('ul').querySelectorAll('li');
 var gsan=document.querySelector('.gsan');
 var xsan=document.querySelector('.xsan');
 var guangzhou=document.querySelector('.guangzhou');
 var xiamen=document.querySelector('.xiamen');
 lis[0].addEventListener('mouseover',function(){
    gsan.style.display='block';
    xsan.style.display='none';
    guangzhou.style.display='block';
    xiamen.style.display='none';
 })
 lis[1].addEventListener('mouseover',function(){
    gsan.style.display='none';
    xsan.style.display='block';
    guangzhou.style.display='none';
    xiamen.style.display='block';
 })