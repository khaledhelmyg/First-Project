$(document).ready(function(){
    $(window).scroll(function(){
        if($(document).scrollTop() > 50){
            $(".navbar").css("background-color","#ffffff");
            $(".navbar").css("border-bottom","1px solid #ddd");
        }else{
            $(".navbar").css("background-color","transparent");
            $(".navbar").css("border-bottom","none");
        }
    });
    var selectedClass ="";
    $(".filter").click(function(){
        selectedClass = $(this).attr('data-rel');
        $(".pisc").not("."+selectedClass).css("display","none");
        $("."+selectedClass).css({
            "display":"block"
        });
    })
})