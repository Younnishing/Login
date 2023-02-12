var times = 0;
$(".Login-psw").click(function (){
    $(this).css("color","#558BC9");
    $(".Login-email").css("color","black");
    console.log("现在是密码登录");
    $(".psw-box").attr("class","psw-box");
    $(".email-box").addClass("display");
});
$(".Login-email").click(function (){
    $(this).css("color","#558BC9");
    $(".Login-psw").css("color","black");
    console.log("现在是邮箱登录");
    $(".psw-box").addClass("display");
    $(".email-box").attr("class","email-box");
    $(".email-tips").fadeIn(200);
});
$("#dis-hid-psw").click(function () {
    if(times == 0){
        $("#psw").attr("type","text");
        $(this).attr("src","images/display.png");
        times = 1;
    }else{
        $("#psw").attr("type","password");
        $(this).attr("src","images/hide.png");
        times = 0;
    }
});
var ok = document.getElementById("ok");
var emailtips = document.getElementById("email-tips");
var refresh = document.getElementById("refreshQRcode");
setTimeout(function () {
    refresh.style.display = 'block';
},3000);
refresh.onclick = function () {
    refresh.style.display = 'none';
    setTimeout(function () {
        refresh.style.display = 'block';
    },3000);
}
ok.onclick = function () {
    emailtips.style.display = "none";
}
$("#logreg").click(function () {
    $.ajax({
        type: 'post',
        url: 'http://127.0.0.1:4523/m2/2262672-0-default/60873934',
        data: {
            "Username": $("#usn").val(),
            "Password": $("#psw").val(),
            "Email": $('#email').val(),
            "VerifyCode": $('#ver').val()
        },
        dataType: 'from-data',
        beforeSend: function (xhr) {
            console.log("before send");
        },
        success: function (data) {
            console.log(data);
        },
        error: function (xhr) {
            console.log(xhr);
        },
        complete: function (xhr) {
            console.log(xhr);
        }
    })
});
$(".getVercode").click(function () {
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:4523/m2/2262672-0-default/60873933',
        data: {
            "Email": $("#email").val()
        },
        dataType: 'form-data',
        beforeSend: function (xhr) {
            console.log("before send");
        },
        success: function (data) {
            console.log(data);
            console.log(msg);
        },
        error: function (xhr) {
            console.log(xhr);
        },
        complete: function (xhr) {
            console.log(xhr);
        }
    })
})

