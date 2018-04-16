
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
        var aside_id = "#aside_" + directiion;

        if ($(aside_id).hasClass('not_display')) {
            openAside(aside_id, directiion)

        }
        else {
            closeAside(aside_id, directiion)
        }


    })
});


function openAside(aside_id, directiion) {
    $(aside_id).removeClass("not_display");
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


}

function closeAside(aside_id, directiion) {
    if (directiion === 'left') {
        $(aside_id).animate({
            left: '-300px',
            opacity: 0
        }, function () {
            $(aside_id).addClass("not_display");
        });
    }
    else if (directiion === 'right') {
        $(aside_id).animate({
            right: '-300px',
            opacity: 0
        }, function () {
            $(aside_id).addClass("not_display");
        });
    }


}

