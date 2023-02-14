$(document).ready(function(){

    //ham_menu click : all menu on
    $(".ham_menu").click(function(){
        $(".mobile_menu").animate({"right":0});
    });
    $(".mobile_close").click(function(){
        $(".mobile_menu").animate({"right":"-100%"});
    });

    $(".g_box ul li").hide();
    $(".g_box ul li:first").show();
    $(".g_btn ul li").click(function(e){
        e.preventDefault();
        var num=$(this).index();
        $(".g_box ul li").each(function(){
        if($(this).index()==num){
          $(".g_box ul li").hide();
          $(this).show();  
        }
    });
    });

    //pop up 
    $(".search").click(function(e){
        e.preventDefault();
        $("html,body").css("overflow","hidden");
        var str=$(this).parents("li").index()+1;
        $("<div/>",{id:"popup_bg"}).appendTo("body");
        $("<div/>",{id:"popup"}).appendTo("#popup_bg");
        $("<div/>",{class:"popup_box"}).appendTo("#popup");
        $(".popup_box").append('<img src="img/g_p'+str+'.png">');
        $("#popup").append('<div class="close">x</div>');
    });
        $("body").on("click","#popup .close",function(){
            $(this).parents("#popup_bg").remove();
            $("html,body").css("overflow-x","hidden");
            $("html,body").css("overflow-y","visible");
        })

//tab menu
    $(".tab_photo ul li").hide();
    $(".tab_photo ul li:first").show();
    $(".tab_title ul li").click(function(e){
        e.preventDefault();
        var li_num=$(this).index();
        $(".tab_photo ul li").each(function(){
            if($(this).index() == li_num){
                $(".tab_photo ul li").hide();
                $(this).show();
            }
        });    
    });         
});


