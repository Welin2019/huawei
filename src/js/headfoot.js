//头部第二部分的下拉菜单
let getList =function(){
    $.ajax({
        url: '../lib/index.json',
        dataType: 'json',
        success:function(res){
            let str = ''
            res.forEach(item => {
                str += `<li><a href="../pages/list.html"><span>${ item.name }</span></a></li>`
            })
            $('.header_two_l > ul')
            .html(str)
            .on({
                mouseenter: () => $('.header_two_l > aside').stop().slideDown(),
                mouseleave: () => $('.header_two_l > aside').stop().slideUp()
              }).children('li')
            .on('mouseover', function (){
                const index = $(this).index()
                const list = res[index].list
                let str = ''
                list.forEach(item => {
                    str +=`<li>
                    <a href="../pages/detail.html?id=${ item.id }" target="_blank" class="alist" idx="${ item.id }"><img src="${ item.images }" alt="">
                      <p>${ item.title }</p>
                      <span>¥${ item.price }</span></a>
                  </li>`
                })
                $('.header_two_l > aside > div>ul').html(str)
            })
            $('.header_two_l > aside').on({
                mouseover: function () { $(this).finish().show() },
              mouseout: function () { $(this).finish().slideUp() }
            })
        }
    })
}
getList()

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
