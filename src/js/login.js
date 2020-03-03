//切换登录注册
$('.loginTitle').click(function(){
    $(this).addClass('actived').siblings().removeClass('actived')
    $('.loginBtn').show()
    $('.signBtn').hide()
    $('.tip').hide();
})
$('.signTitle').click(function(){
    $(this).addClass('actived').siblings().removeClass('actived')
    $('.signBtn').show();
    $('.loginBtn').hide();
    $('.tip').show();
    $('#username').val('');
    $('#password').val('');
    
})


$('.loginBtn').click(function(){
    let uname = $('#username').val();
    let upass = $('#password').val();
    if(!uname || !upass){
        alert('华为号或密码不能为空')
        return
    }
    // $.ajax({
    //     url:'/login',
    //     type:'post',
    //     data:{
    //         username:`${uname}`,
    //         password:`${upass}`
    //     },
    //     dataType:'json',
    //     success:function(){
    //         let result = JSON.parse(res);
    //         if(result.code===0){
    //             alert('华为号或密码错误')
    //         }else{
    //             window.location.href = '../pages/cart.html'
    //         }
    //     }
    // })
})

$('.signBtn').click(function(){
    let uname = $('#username').val();
    let upass = $('#password').val();
    if(!uname || !upass){
        alert('华为号或密码不能为空')
        return
    }
    let reg = /^[0-9a-zA-Z]{5,8}$/;
    console.log(reg.test(uname));
    console.log(reg.test(upass));
    
    if(!reg.test(uname) || !reg.test(upass)){
        alert('华为号和密码都要在5-8位以内的任意数或字母的组合~')
        return
    }

    // $.ajax({
    //     url:'/sign',
    //     type:'post',
    //     data:{
    //         username:`${uname}`,
    //         password:`${upass}`
    //     },
    //     dataType:'json',
    //     success:function(){
    //         let result = JSON.parse(res);
    //         if(result.code===0){
    //             alert('华为号或密码错误')
    //         }else{
    //             alert('欢迎回到华为！')
    //             window.location.href = '../pages/cart.html'
    //         }
    //     }
    // })
})
