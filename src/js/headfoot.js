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


//底部渲染
// let footer_two_l = document.querySelector('.footer_two_l')
// let fAside = document.createElement('aside');
// footer_two_l.appendChild(fAside);
// for (const {title,desc} of service){
//     let ul = document.createElement('ul');
//     fAside.appendChild(ul);
//     ul.innerHTML = `
//         <p>${title}</p>
//         <li>${desc[0]}</li>
//         <li>${desc[1]}</li>
//         <li>${desc[2]}</li>
//         <li>${desc[3]}</li>
//     `
// }

// let footer_three = document.querySelector('.footer_three div');
// let pFooter = document.createElement('p');
// footer_three.appendChild(pFooter);
// warrant_one.forEach(function(item){
//     pFooter.innerHTML += `<span>${item}</span>`
// })
// let uFooter = document.createElement('ul');
// footer_three.appendChild(uFooter);
// warrant_two.forEach(function(item){
//     uFooter.innerHTML += `<li>${item}</li>`
// })
