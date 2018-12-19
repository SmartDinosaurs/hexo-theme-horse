$(document).ready(function(){
    var _index = 0;
    var _before_index = 0;
    var _clear_time = null;
    $(".img-circle-wrapper span").mouseover(function() {
        clearInterval(_clear_time);
        _index = $(this).index();
        ScrollPlay();
        _before_index = _index;
    }).mouseout(function(){
        AutoPlay();
    });
    $(".img-wrapper .img-prev").click(function(){
        _index--;
        if(_index < 0) { 
            _index = 2;
            _before_index = 0;
        }
        ScrollPlay();
        _before_index = _index;
    });
    $(".img-wrapper .img-next").click(function(){
        _index++;
        if(_index > 2) { 
            _index = 0;
            _before_index = 2;
        }
        ScrollPlay();
        _before_index = _index;
    });
    $(".img-wrapper").hover(function(){
        $("a.img-prev, a.img-next").show();
    }, function(){
        $("a.img-prev, a.img-next").hide();
    });

    AutoPlay();
    function AutoPlay() {
        _clear_time = setInterval(function(){
            _index++;
            if(_index > 2) { 
                _index = 0;
                _before_index = 2;
            }
            ScrollPlay();
            _before_index = _index;
        }, 3000);
    }

    function ScrollPlay() {
        $(".img-circle-wrapper span").eq(_index).addClass("hover").siblings("span").removeClass("hover");
        if(_index === 0 && _before_index === 2) {
            $(".img-scroll img").eq(_before_index).css("left","0%").animate({"left":"-100%"}, 300);
            $(".img-scroll img").eq(_index).css("left","100%").animate({"left":"0%"}, 300);
        }
        else if(_index === 2 && _before_index === 0) {
            $(".img-scroll img").eq(_before_index).css("left","0%").animate({"left":"100%"}, 300);
            $(".img-scroll img").eq(_index).css("left","-100%").animate({"left":"0%"}, 300);
        }
        else if(_index > _before_index) {
            $(".img-scroll img").eq(_before_index).css("left","0%").animate({"left":"-100%"}, 300);
            $(".img-scroll img").eq(_index).css("left","100%").animate({"left":"0%"}, 300);
        }
        else if(_index < _before_index) {
            $(".img-scroll img").eq(_before_index).css("left","0%").animate({"left":"100%"}, 300);
            $(".img-scroll img").eq(_index).css("left","-100%").animate({"left":"0%"}, 300);
        }
    }
});