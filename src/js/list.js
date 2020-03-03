let oData = function(ele,arr){
    let nUl = document.createElement('ul');
    nUl.classList.add('gLists');
    let oUl = ele.querySelector('ul');
    ele.replaceChild(nUl,oUl);
    for (const {id,images,title,price,style,rate,comment,label} of arr){
        let li = document.createElement('li');
        nUl.appendChild(li);
        li.innerHTML = `
        <a href="" idx=${id} class="inter" target="_blank" title="HUAWEI Mate 30 Pro 5G">
            <p class="p-img">      <img src="${images}"></p>
            <p class="p-name" title="${title} ">${title}</p>
            <p class="p-price"><b><em>¥</em>${price}</b><span>${style}</span></p>
            <p class="p-label"><span>${label}</span></p>
            <p class="p-comment"><em><span>${rate}</span>人评价</em><em><span>${comment}</span>%好评</em></p>
        </a>
        `
    }
}

//分页分割数组
let dataHanding = function(arr){
    let arrLen = arr.length;
    let num = 20;
    let index = 0;
    let newArr = []
    for(let i =0;i<arrLen;i++){
        if(i%num ===0 && i !==0){
            newArr.push(arr.slice(index,i));
            index = i
        }
        if ((i+1)===arrLen){
            newArr.push(arr.slice(index,i+1))
        }
    }
    return newArr
}
let dataHand = function(arr){
    let oneData = [];
    oneData.push(...dataHanding(arr)[0])
    let twoData = [];
    twoData.push(...dataHanding(arr)[1])
    return [oneData,twoData]
}

//渲染
let goods = document.querySelector('.goods');
oData(goods,dataHanding(allData)[0]);
//排序
//综合
$('.composite').click(function(){
    $(this).addClass('select').siblings().removeClass('select')
    if($('.aPagers').text() == 1){
        oData(goods,dataHanding(allData)[0]);
    }
    if($('.aPagers').text() == 2){
        oData(goods,dataHanding(allData)[1]);
    }
    let inter = document.querySelectorAll('.inter');
    link(inter);
})
//价格
let nData = [];
nData.push(...allData)
nData.sort(function(a,b){
    return a.price - b.price;
})
$('.lower').click(function(){
    $(this).addClass('select').siblings().removeClass('select')
    if($('.aPagers').text() == 1){
        oData(goods,dataHanding(nData)[0]);
    }
    if($('.aPagers').text() == 2){
        oData(goods,dataHanding(nData)[1]);
    }
    let inter = document.querySelectorAll('.inter');
    link(inter);
})
//页数
let oLi = document.querySelectorAll('.goods > ul > li')
let pagers = document.querySelector('.phones > aside > .pagers > ul')
$('.pagers ul .onPager').click(function(){
    $('.onePager').addClass('aPagers').siblings().removeClass('aPagers')
    if($('.select').text() == '综合'){
        oData(goods,dataHanding(allData)[0]);
    }
    if($('.select').text() == '价格'){
        oData(goods,dataHanding(nData)[0]);
    }
    let inter = document.querySelectorAll('.inter');
    link(inter);
})
$('.pagers ul .toPager').click(function(){
    $('.twoPager').addClass('aPagers').siblings().removeClass('aPagers')
    if($('.select').text() == '综合'){
        oData(goods,dataHanding(allData)[1]);
    }
    if($('.select').text() == '价格'){
        oData(goods,dataHanding(nData)[1]);
    }
    let inter = document.querySelectorAll('.inter');
    link(inter);
})

let inter = document.querySelectorAll('.inter');
link(inter);

//跳转
function link(ele){
    ele.forEach(function(item,index){
        ele[index].onclick = function(){
            let id = this.getAttribute('idx');
            this.setAttribute('href','../pages/detail.html?id='+id);
        }
    })
}

