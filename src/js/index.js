//头部第二部分的下拉菜单
$('.header_two_l > ul li').mouseover(
    function(){
        $(this).parent().next().slideDown().css('display','block')
})

$('.header_two_l').mouseleave(function(){
    $(this).children('aside').slideUp()
})

$('.header_two_l aside').mousemove(function(){
    $(this).stop()
})

//!banner透明度轮播
let bannerW = document.querySelector('#bannerW');
let bannerlist = document.querySelector('.bannerlist');
let bannerlists = bannerlist.children;
let index = 0;
let timer;
bannerW.onmouseover = () => clearInterval(timer);
bannerW.onmouseout = () => autoPlay();
//记录轮播当前图和小圆点的索引值
function Num (x) {
    if(index === 6){
        index = x = 0;
    };
    document.querySelector('.active').className = '';
    document.querySelector('.bannerbtn li:nth-child(' + (x + 1) + ')').className = 'active';
    document.querySelector('.selection').className = '';
    document.querySelector('.bannerlist li:nth-child(' + (x + 1) + ')').className = 'selection';
}
//自动轮播
function autoPlay(){
    timer= setInterval(function(){
        index++;
        Num(index)
    },3000);
} 
//小圆点点击事件
let bannerbtn = document.querySelector('.bannerbtn');
let bannerbtns = bannerbtn.children;
for(let i = 0;i<bannerbtns.length;i++){
    bannerbtns[i].idx = i ;
    bannerbtns[i].onclick = function(){
        //记录当前点击的小圆点的索引，并赋值给index
        index = this.idx;
        //给记录当前轮播索引的函数传参
        Num(index);
    }
}
//调用
autoPlay();


//列表渲染
//封装渲染
let lists = function(ele,arr){
    let nUl = document.createElement('ul');
    nUl.classList.add('pwo_three');
    let oUl = ele.querySelector('ul');
    ele.replaceChild(nUl,oUl);
    for (const {id,images,sale,title,desc,price} of arr){
        let li = document.createElement('li');
        nUl.appendChild(li);
        li.innerHTML = `
        <a href="" class="alink" idx="${id}" target="_blank">
        <figure><img src="${images}" alt=""><figcaption>${sale}</figcaption></figure>
        <h3 title="${title}">${title}</h3>
        <h4 title="${desc}">${desc}</h4>
        <h5><p>¥<span>${price}</span>起</p></h5></a>
        `;
    }
}

let promote = document.querySelector('.promote');
lists(promote,gridOne);
let oPromote = promote.querySelectorAll('.alink');
link(oPromote);

let advance = document.querySelector('.advance');
lists(advance,gridTwo);
let oAdvance = advance.querySelectorAll('.alink');
link(oAdvance);

let offices = document.querySelector('.offices');
lists(offices,gridThree);
let oOffices = offices.querySelectorAll('.alink');
link(oOffices);

let house = document.querySelector('.house');
lists(house,gridFour);
let oHouse = house.querySelectorAll('.alink');
link(oHouse);

let study = document.querySelector('.study');
lists(study,gridFive);
let oStudy = study.querySelectorAll('.alink');
link(oStudy);

let health = document.querySelector('.health');
lists(health,gridSix);
let oHealth = health.querySelectorAll('.alink');
link(oHealth);

let digital = document.querySelector('.digital');
lists(digital,gridSeven);
let oDigital = digital.querySelectorAll('.alink');
link(oDigital);

let fittings = document.querySelector('.fittings');
lists(fittings,gridEight);
let oFittings = fittings.querySelectorAll('.alink');
link(oFittings);

//获取id
function link(ele){
    ele.forEach(function(item,index){
        ele[index].onclick = function(){
            let id = this.getAttribute('idx');
            this.setAttribute('href','../pages/detail.html?id='+id);
        }
    })
}

//回到顶部
$('.backHeader').click(()=>{
    $('html').animate({
        scrollTop:0
    },0)
})

//底部渲染
let footer_two_l = document.querySelector('.footer_two_l')
let fAside = document.createElement('aside');
footer_two_l.appendChild(fAside);
for (const {title,desc} of service){
    let ul = document.createElement('ul');
    fAside.appendChild(ul);
    ul.innerHTML = `
        <p>${title}</p>
        <li>${desc[0]}</li>
        <li>${desc[1]}</li>
        <li>${desc[2]}</li>
        <li>${desc[3]}</li>
    `
}

let footer_three = document.querySelector('.footer_three div');
let pFooter = document.createElement('p');
footer_three.appendChild(pFooter);
warrant_one.forEach(function(item){
    pFooter.innerHTML += `<span>${item}</span>`
})
let uFooter = document.createElement('ul');
footer_three.appendChild(uFooter);
warrant_two.forEach(function(item){
    uFooter.innerHTML += `<li>${item}</li>`
})
