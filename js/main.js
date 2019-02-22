;(function($){
    $(function(){
        
        $("#click-to-go-next").click(function(){
            $("body,html").stop(true, true).animate({
                scrollTop: $("#most-clients-need-section").offset().top - 0
            }, 800);
        })
    })
})(jQuery)