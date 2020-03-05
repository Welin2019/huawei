//判断本地是否存在localStorage
if(localStorage.length===0){
    $('.sc-empty').show()
    $('.sc-list').hide()
}else{
    $('.sc-empty').hide()
    $('.sc-list').show()
}
//获取所有的localStorage
let arr = [];
for(var i =0;i<localStorage.length;i++){
    let key = localStorage.key(i)
    arr.push(JSON.parse(localStorage.getItem(key)))
}
//渲染
let form = document.querySelector('.cart-form');
for (const {id,images,title,price,num} of arr){
    let div = document.createElement('div');
    div.classList.add('clear_fix');
    div.classList.add('wares');
    form.appendChild(div);
    div.innerHTML = `<label class="checkbox"><input class="vam" type="checkbox" checked name="check" idx ="${id}"> </label>
    <aside class="sc-pro-area">
      <a href="../pages/detail.html?id=${id}" target="_blank" class="p-img"><img src="${images}" alt="${title}"></a>
      <ul>
        <li class="p-all">
          <a href="../pages/detail.html?id=${id}" title="${title}" target="_blank" class="p-name">
          ${title} 8GB+128GB 官方标配</a>
          <div class="p-label">  <span>分期免息</span> </div>
        </li>
        <li class="p-price">¥ <span>${price}</span>.00</li>
        <li class="p-stock-area">
          <input type="text" class="p-stock-text" value="${num}">
          <p class="p-stock-btn">
            <a class="desc">−</a>
            <a class="insec">+</a>
          </p>
        </li>
        <li class="p-price-total">
          ¥ <span>${price}</span>.00
        </li>
        <li class="p-del" idx ="${id}">删除</li>
      </ul>
    </aside>`
}

//input 选项框封装
$.fn.extend({
  selectAll:function(type=true){
      this.each(function(index,item){
          item.checked=type
      })
      return this
  },
  selectOthers:function(){
      this.each(function(index,item){
          item.checked = !item.checked
      })
      return this
  }
})

$('.vam01').click(function(){
  if($(this).prop('checked')){
    $('.vam').selectAll()
    $('.vam02').prop('checked',true)
    $('.sc-total-price').children('span').children('i').text(fun())
  }else{
    $('.vam').selectAll(false)
    $('.vam02').prop('checked',false)
    $('.sc-total-price').children('span').children('i').text(fun())
  }
})

$('.vam02').click(function(){
  if($(this).prop('checked')){
    $('.vam').selectAll()
    $('.vam01').prop('checked',true)
    $('.sc-total-price').children('span').children('i').text(fun())
  }else{
    $('.vam').selectAll(false)
    $('.vam01').prop('checked',false)
    $('.sc-total-price').children('span').children('i').text(fun())
  }
})

$('.del02').click(function(){
  let res = confirm('您确认要删除选中的商品吗？')
  if(res === true){
    $('.vam').each(function(index,item){
      if($(item).prop('checked')){
        $(this).parents('.wares').remove();
        console.log($(this));
        
        let idx = $(this).attr('idx');
        localStorage.removeItem(idx);
        $('.sc-total-price').children('span').children('i').text(fun())
      }
      if($("input[name='check']:checked").length===localStorage.length){
        $('.sc-empty').show()
        $('.sc-list').hide()
      }
    })
  }
})

$('.vam').each(function(index,item){
  $(item).click(function(){
    if(($("input[name='check']:checked").length===localStorage.length)){
      $('.vam01').prop('checked',true)
      $('.vam02').prop('checked',true)
      $('.sc-total-price').children('span').children('i').text(fun())
    }else{
      $('.vam01').prop('checked',false)
      $('.vam02').prop('checked',false)
      $('.sc-total-price').children('span').children('i').text(fun())
    }
    if($(this).prop('checked')){
      $('.sc-total-price').children('span').children('i').text(fun())
    };
    
  })
})
//封装单个总价
let priceTotal = function(ele,val){
  let price = $(ele).parents('.p-stock-area').prev().children('span')
  let num1 = price.text()*val
 $(ele).parents('.p-stock-area').next().children('span').text(num1)

  $(ele).parents('.cart-form').next().children('.sc-total-price').children('span').children('i').text(fun())
}


// let fun = function(){
//   let sum =0;
//   if($('.vam').prop('checked')){
//     $('.p-price>span').each(function(){
//       let value = $(this).parents('.p-price').next().children('.p-stock-text').val()
//       sum += $(this).text()*value
//     })
//   }
//   return sum
// }
//封装所有总价
let fun = function(){
  let sum =0;
  $('.vam').each(function(index,item){
    if($(item).prop('checked')){
      let value = ($(this).parents('.checkbox').siblings().children('ul').children('.p-price-total').children().text())*1;
      sum+=value
    }
  })
  return sum
}

$('.sc-total-price').children('span').children('i').text(fun())

//del
$('.p-del').click(function(){
    let res = confirm('您确认要删除该商品吗？')
    if(res === true){
        $(this).parents('.wares').remove();
        let idx = $(this).attr('idx');
        localStorage.removeItem(idx);
        $('.sc-total-price').children('span').children('i').text(fun())
    }
})
//+
$('.insec').click(function(){
  let input =  $(this).parents('.p-stock-area').children('.p-stock-text')
  let val = input.val()
  val++ 
  input.val(val)
  priceTotal(this,val)

})
//-
$('.desc').click(function(){
  let input =  $(this).parents('.p-stock-area').children('.p-stock-text')
  let val = input.val()
  if(val >1){
    val-- 
    input.val(val)
  }else{
    input.val(1)
  }
  priceTotal(this,val)
  
})


