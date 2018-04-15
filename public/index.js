
$( document ).ready(function() {
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 140) {
            $('.content_fixed').addClass('fix');
        }
        else {
            $('.content_fixed').removeClass('fix');
        }
    });

    $(".controls").click(function(event){

        var directiion = event.target.id
        var aside_id = "#" + directiion + "_aside";

        if ($(aside_id).hasClass('show')) {
            closeSidepage(aside_id, directiion)
        }
        else {
            openSidepage(aside_id, directiion)
        }


    })
});


function openSidepage(aside_id, directiion) {
    if (directiion === 'left') {
        $(aside_id).animate({
            left: '0px',
            opacity: 1
        });
    }
    else if (directiion === 'right') {
        $(aside_id).animate({
            right: '0px',
            opacity: 1
        });
    }
    $(aside_id).addClass("show");

}

function closeSidepage(aside_id, directiion) {
    if (directiion === 'left') {
        $(aside_id).animate({
            left: '-300px',
            opacity: 0
        });
    }
    else if (directiion === 'right') {
        $(aside_id).animate({
            right: '-300px',
            opacity: 0
        });
    }
    $(aside_id).removeClass("show");
}

