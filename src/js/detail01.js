//获取id
let parmas = location.search.slice(1);
let suo = location.search.slice(1).split('=')[1];
let res = Data.filter(function(item){
    return item.id == suo;
})[0];


//动态渲染
let design = document.querySelector('#design');
let fangda = document.createElement('article')
fangda.classList.add('fangda');
let oFangda = design.querySelector('article');
design.replaceChild(fangda,oFangda);
fangda.innerHTML = `
<div class="big">
  <img src="${res.images}" alt="">
  <div class="mask"></div>
</div>
<div class="small">
<ul  class = "piclist">
    <li class="selected" img= "${res.images}" bgimg = "${res.images}"><img src="${res.images}" alt=""></li>
    <li img= "https://res.vmallres.com/pimages//product/6901443353255/group//800_800_AB9CB505EB16A44C9A57EB3AAFC1C9EFF079536AFCE6E03A.png" bgimg = "https://res.vmallres.com/pimages//product/6901443353255/group//800_800_AB9CB505EB16A44C9A57EB3AAFC1C9EFF079536AFCE6E03A.png"><img src="https://res.vmallres.com/pimages//product/6901443353255/group//78_78_AB9CB505EB16A44C9A57EB3AAFC1C9EFF079536AFCE6E03A.png" alt=""></li>
    <li img= "https://res.vmallres.com/pimages//product/6901443353255/group//800_800_6828CD07636A95C52203EBDBB566755C7D271194F93E9C95.png" bgimg = "https://res.vmallres.com/pimages//product/6901443353255/group//800_800_6828CD07636A95C52203EBDBB566755C7D271194F93E9C95.png"><img src="https://res.vmallres.com/pimages//product/6901443353255/group//78_78_6828CD07636A95C52203EBDBB566755C7D271194F93E9C95.png" alt=""></li>
    <li img= "https://res.vmallres.com/pimages//product/6901443353255/group//800_800_5E874C8683B0D5F86FC4F9560DC18B522C73C0E4D1250994.png" bgimg = "https://res.vmallres.com/pimages//product/6901443353255/group//800_800_5E874C8683B0D5F86FC4F9560DC18B522C73C0E4D1250994.png"><img src="https://res.vmallres.com/pimages//product/6901443353255/group//78_78_5E874C8683B0D5F86FC4F9560DC18B522C73C0E4D1250994.png" alt=""></li>
    <li img= "https://res.vmallres.com/pimages//product/6901443353255/group//800_800_669D111EE4E5C46CA6A514C5F6602CA43DAFBD67A69F5263.png" bgimg = "https://res.vmallres.com/pimages//product/6901443353255/group//800_800_669D111EE4E5C46CA6A514C5F6602CA43DAFBD67A69F5263.png"><img src="https://res.vmallres.com/pimages//product/6901443353255/group//78_78_669D111EE4E5C46CA6A514C5F6602CA43DAFBD67A69F5263.png" alt=""></li>
</ul>
</div>
<div class="enlarge"  style="background-image:url(${res.images})"></div>
`
let aAside = design.querySelector('aside')
let oh2 = aAside.querySelector('h2')
let nh2 = document.createElement('h2')
nh2.classList.add('pro-name');
aAside.replaceChild(nh2,oh2);
nh2.innerHTML = `${res.title}`

let oInfo = aAside.querySelector('.text')
let nInfo = document.createElement('div')
nInfo.classList.add('product-info');
aAside.replaceChild(nInfo,oInfo);
nInfo.innerHTML = `
<dl class="product-price clear_fix">
  <dd>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</dd>
  <dt>抢购价<span><em>¥</em>${(res.price)}.00</span></dt>
</dl>
<dl class="product-info-list clear_fix">
  <dd>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</dd>
  <dt>
    <p><em>限时特价</em>
      <span>限时直降500元 </span></p>
    <p><em>整点赠送</em>
      <span>0点/10点/16点/20点下单前200名赠华为mini蓝牙音箱（Mate 30 5G系列共享</span></p>
    <p><em>分期免息</em>
      <span>花呗、掌上生活、银联、工行分期支付可享免息（免息活动适用于单款免息商品订单，含多款商品订单仅在免息活动一致时可享用） </span></p>
    <p><em>限时特价</em>
      <span>购买即赠商城积分，积分可抵现~</span></p>
  </dt>
</dl>
`

//加入购物车
let shuru = document.querySelector('#shuru');
let increase = document.querySelector('#increase');
let decrease = document.querySelector('#decrease');

increase.onclick = () => shuru.value++;
decrease.onclick = () => shuru.value >= 2 && shuru.value--;


//!放大镜

class Enlarge {
    constructor(ele) {
        this.ele = document.querySelector(ele);
        this.init()
    }
    init() {
        this.big = this.ele.querySelector('.big');
        this.mask = this.ele.querySelector('.mask');
        this.enlarge = this.ele.querySelector('.enlarge');

        this.big.onmouseover = () => {
            this.mask.style.display = this.enlarge.style.display = 'block';
            this.setStyle();
            this.move()
        }
        this.big.onmouseout = () => {
            this.mask.style.display = this.enlarge.style.display = 'none'
        }

        this.p = this.ele.querySelector('.piclist').children;
        
        let _this = this;
        for (let i = 0; i < this.p.length; i++) {
            this.p[i].onmousemove = function () {
                _this.change(this);
            }
        }


    }
    setStyle() {
        this.maskWidth = this.mask.offsetWidth;
        this.maskHeight = this.mask.offsetHeight;

        this.bgx = parseInt(getStyle(this.enlarge, 'background-size').split(' ')[0])
        this.bgy = parseInt(getStyle(this.enlarge, 'background-size').split(' ')[1])

        this.bigWidth = this.big.clientWidth;
        this.bigHeight = this.big.clientHeight;

        let enlargeX = this.maskWidth * this.bgx / this.bigWidth;
        let enlargeY = this.maskHeight * this.bgy / this.bigHeight;

        this.enlarge.style.width = enlargeX + 'px';
        this.enlarge.style.height = enlargeY + 'px'

    }
    move() {
        this.big.onmousemove = (e) => {

            let left = e.pageX - this.ele.offsetLeft - this.maskWidth / 2;
            let top = e.pageY - this.ele.offsetTop - this.maskHeight / 2;

            if (left <= 0) {
                left = 0;
            }
            if (top <= 0) {
                top = 0;
            }
            if (left >= this.bigWidth - this.maskWidth) {
                left = this.bigWidth - this.maskWidth;
            }
            if (top >= this.bigHeight - this.maskHeight) {
                top = this.bigHeight - this.maskHeight
            }

            this.mask.style.left = left + 'px';
            this.mask.style.top = top + 'px';

            let bgPX = this.bgx * left / this.bigWidth;
            let bgPY = this.bgy * top / this.bigHeight;
            this.enlarge.style.backgroundPosition = `-${bgPX}px -${bgPY}px`;
        }
    }
    change(ele) {
        for (let j = 0; j < this.p.length; j++) {
            this.p[j].classList.remove('selected');
        }
        ele.classList.add('selected');
        
        let bgimg = ele.getAttribute('bgimg');
        
        let img = ele.getAttribute('img');    

        this.img = this.big.querySelector('img');
       
        this.img.setAttribute('src', img);

        this.enlarge.style.backgroundImage = `url(${bgimg})`;
        this.enlarge.style.backgroundSize = `800px 800px`;
        
    }
}

new Enlarge('.fangda')

$('.product-button01').click(function(){
    let id = location.search.slice(4)*1;
    let obj = {};
    obj.id = id
    obj.images = res.images
    obj.title = res.title
    obj.price = res.price
    obj.num = ($('#shuru').val())*1
    localStorage.setItem(id, JSON.stringify(obj))
    alert('添加购物车成功^_^')
})
