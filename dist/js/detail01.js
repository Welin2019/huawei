"use strict";function _classCallCheck(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,s){for(var t=0;t<s.length;t++){var i=s[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,s,t){return s&&_defineProperties(e.prototype,s),t&&_defineProperties(e,t),e}var parmas=location.search.slice(1),suo=location.search.slice(1).split("=")[1],res=Data.filter(function(e){return e.id==suo})[0],design=document.querySelector("#design"),fangda=document.createElement("article");fangda.classList.add("fangda");var oFangda=design.querySelector("article");design.replaceChild(fangda,oFangda),fangda.innerHTML='\n<div class="big">\n  <img src="'.concat(res.images,'" alt="">\n  <div class="mask"></div>\n</div>\n<div class="small">\n<ul  class = "piclist">\n    <li class="selected" img= "').concat(res.images,'" bgimg = "').concat(res.images,'"><img src="').concat(res.images,'" alt=""></li>\n    <li img= "https://res.vmallres.com/pimages//product/6901443353255/group//800_800_AB9CB505EB16A44C9A57EB3AAFC1C9EFF079536AFCE6E03A.png" bgimg = "https://res.vmallres.com/pimages//product/6901443353255/group//800_800_AB9CB505EB16A44C9A57EB3AAFC1C9EFF079536AFCE6E03A.png"><img src="https://res.vmallres.com/pimages//product/6901443353255/group//78_78_AB9CB505EB16A44C9A57EB3AAFC1C9EFF079536AFCE6E03A.png" alt=""></li>\n    <li img= "https://res.vmallres.com/pimages//product/6901443353255/group//800_800_6828CD07636A95C52203EBDBB566755C7D271194F93E9C95.png" bgimg = "https://res.vmallres.com/pimages//product/6901443353255/group//800_800_6828CD07636A95C52203EBDBB566755C7D271194F93E9C95.png"><img src="https://res.vmallres.com/pimages//product/6901443353255/group//78_78_6828CD07636A95C52203EBDBB566755C7D271194F93E9C95.png" alt=""></li>\n    <li img= "https://res.vmallres.com/pimages//product/6901443353255/group//800_800_5E874C8683B0D5F86FC4F9560DC18B522C73C0E4D1250994.png" bgimg = "https://res.vmallres.com/pimages//product/6901443353255/group//800_800_5E874C8683B0D5F86FC4F9560DC18B522C73C0E4D1250994.png"><img src="https://res.vmallres.com/pimages//product/6901443353255/group//78_78_5E874C8683B0D5F86FC4F9560DC18B522C73C0E4D1250994.png" alt=""></li>\n    <li img= "https://res.vmallres.com/pimages//product/6901443353255/group//800_800_669D111EE4E5C46CA6A514C5F6602CA43DAFBD67A69F5263.png" bgimg = "https://res.vmallres.com/pimages//product/6901443353255/group//800_800_669D111EE4E5C46CA6A514C5F6602CA43DAFBD67A69F5263.png"><img src="https://res.vmallres.com/pimages//product/6901443353255/group//78_78_669D111EE4E5C46CA6A514C5F6602CA43DAFBD67A69F5263.png" alt=""></li>\n</ul>\n</div>\n<div class="enlarge"  style="background-image:url(').concat(res.images,')"></div>\n');var aAside=design.querySelector("aside"),oh2=aAside.querySelector("h2"),nh2=document.createElement("h2");nh2.classList.add("pro-name"),aAside.replaceChild(nh2,oh2),nh2.innerHTML="".concat(res.title);var oInfo=aAside.querySelector(".text"),nInfo=document.createElement("div");nInfo.classList.add("product-info"),aAside.replaceChild(nInfo,oInfo),nInfo.innerHTML='\n<dl class="product-price clear_fix">\n  <dd>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</dd>\n  <dt>抢购价<span><em>¥</em>'.concat(res.price,'.00</span></dt>\n</dl>\n<dl class="product-info-list clear_fix">\n  <dd>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</dd>\n  <dt>\n    <p><em>限时特价</em>\n      <span>限时直降500元 </span></p>\n    <p><em>整点赠送</em>\n      <span>0点/10点/16点/20点下单前200名赠华为mini蓝牙音箱（Mate 30 5G系列共享</span></p>\n    <p><em>分期免息</em>\n      <span>花呗、掌上生活、银联、工行分期支付可享免息（免息活动适用于单款免息商品订单，含多款商品订单仅在免息活动一致时可享用） </span></p>\n    <p><em>限时特价</em>\n      <span>购买即赠商城积分，积分可抵现~</span></p>\n  </dt>\n</dl>\n');var shuru=document.querySelector("#shuru"),increase=document.querySelector("#increase"),decrease=document.querySelector("#decrease");increase.onclick=function(){return shuru.value++},decrease.onclick=function(){return 2<=shuru.value&&shuru.value--};var Enlarge=function(){function s(e){_classCallCheck(this,s),this.ele=document.querySelector(e),this.init()}return _createClass(s,[{key:"init",value:function(){var e=this;this.big=this.ele.querySelector(".big"),this.mask=this.ele.querySelector(".mask"),this.enlarge=this.ele.querySelector(".enlarge"),this.big.onmouseover=function(){e.mask.style.display=e.enlarge.style.display="block",e.setStyle(),e.move()},this.big.onmouseout=function(){e.mask.style.display=e.enlarge.style.display="none"},this.p=this.ele.querySelector(".piclist").children;for(var s=this,t=0;t<this.p.length;t++)this.p[t].onmousemove=function(){s.change(this)}}},{key:"setStyle",value:function(){this.maskWidth=this.mask.offsetWidth,this.maskHeight=this.mask.offsetHeight,this.bgx=parseInt(getStyle(this.enlarge,"background-size").split(" ")[0]),this.bgy=parseInt(getStyle(this.enlarge,"background-size").split(" ")[1]),this.bigWidth=this.big.clientWidth,this.bigHeight=this.big.clientHeight;var e=this.maskWidth*this.bgx/this.bigWidth,s=this.maskHeight*this.bgy/this.bigHeight;this.enlarge.style.width=e+"px",this.enlarge.style.height=s+"px"}},{key:"move",value:function(){var a=this;this.big.onmousemove=function(e){var s=e.pageX-a.ele.offsetLeft-a.maskWidth/2,t=e.pageY-a.ele.offsetTop-a.maskHeight/2;s<=0&&(s=0),t<=0&&(t=0),s>=a.bigWidth-a.maskWidth&&(s=a.bigWidth-a.maskWidth),t>=a.bigHeight-a.maskHeight&&(t=a.bigHeight-a.maskHeight),a.mask.style.left=s+"px",a.mask.style.top=t+"px";var i=a.bgx*s/a.bigWidth,n=a.bgy*t/a.bigHeight;a.enlarge.style.backgroundPosition="-".concat(i,"px -").concat(n,"px")}}},{key:"change",value:function(e){for(var s=0;s<this.p.length;s++)this.p[s].classList.remove("selected");e.classList.add("selected");var t=e.getAttribute("bgimg"),i=e.getAttribute("img");this.img=this.big.querySelector("img"),this.img.setAttribute("src",i),this.enlarge.style.backgroundImage="url(".concat(t,")"),this.enlarge.style.backgroundSize="800px 800px"}}]),s}();new Enlarge(".fangda"),$(".product-button01").click(function(){var e=1*location.search.slice(4),s={};s.id=e,s.images=res.images,s.title=res.title,s.price=res.price,s.num=1*$("#shuru").val(),localStorage.setItem(e,JSON.stringify(s))});