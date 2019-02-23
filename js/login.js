$(function(){
    $("a[name ='back']").click(function(){
        $("div#forgotPassword").css("animation-name","fadeOutLeft");
        $("div.login_form").css({"animation-name":"fadeInLeft","display":"block"});
    })

    $("a[name ='forgotPassword']").click(function(){
        $("input[name='frgtEmail']").val('')
        $("div.login_form").css("animation-name","fadeOutLeft");
        $("div#forgotPassword").css({"animation-name":"fadeInLeft","display":"block"});
    })
})
    
