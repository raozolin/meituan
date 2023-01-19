

//1.制作一个定时器,setouttime执行一次，setinterval会每个一段时间执行
var mask=document.querySelector('.mask');
var btn=mask.querySelector('.btn');
// var timer=setTimeout(
// //过规定时间后，mask就显现出来
// mask.style.display='block'
// ,3000)

function timer(){
    mask.style.display='block';
}

setTimeout(timer,5000)
//点击刷新后，执行定时器
btn.addEventListener('click',function(){
    mask.style.display='none';
    setTimeout(timer,5000);
})


//登录界面，点击之后，切换登录方式
var login_card=document.querySelector('.loading-outer');
var login_card2=document.querySelector('.loading-outer2');
var qiehuan=document.querySelector('.qiehuan');
var qiehuan2=document.querySelector('.qiehuan2');
// 如何实现一个效果来回切换

qiehuan.addEventListener('click',function(){
    login_card.style.display='none';
    login_card2.style.display='block';

})
qiehuan2.addEventListener('click',function(){
    login_card.style.display='block';
    login_card2.style.display='none';
})

//切换登录状态
var mimalogin=document.querySelector('.select');
var kuang=document.querySelector('.kuang');
mimalogin.children[0].addEventListener('click',function(){
    mimalogin.children[1].className='';
    this.className='boder';
    kuang.children[3].style.display='none';
    kuang.children[4].style.display='none';

    kuang.children[1].style.display='block';
    kuang.children[2].style.display='block';


})
mimalogin.children[1].addEventListener('click',function(){
    mimalogin.children[0].className='';
    this.className='boder';
    kuang.children[1].style.display='none';
    kuang.children[2].style.display='none';

    kuang.children[3].style.display='block';
    kuang.children[4].style.display='block';

})

