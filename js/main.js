// Version jQuery

// Texte déroulant dans la première section, animation de scroll lors du click sur un bouton li

$(document).ready(function () {
    $(".bullet_point_vertical li").click(function () {
        $(".bullet_point_vertical li").css('color', 'black')
        $(this).css('color', 'red')
        var intro_id = "intro_" + $(this).attr('id')
        var myElement = document.getElementById(intro_id);
        var topPos = myElement.offsetTop;
        console.log(topPos - 454)
        $('.intro_all').animate({
            scrollTop: topPos - 454
        })
        // document.getElementById('intro_all').scrollTop = topPos-454;
    });

})

// Boutons li rouge lors qu'on arrive au titre correspondant

$('.p-b-100').on("scroll", onScroll);
function onScroll(event) {
    var scrollPos = $('#intro_all').scrollTop();
    $('.bullet_point_vertical li').each(function () {
        var refElement = $("#intro_" + $(this).attr("id"));
        var intro_id = "intro_" + $(this).attr('id')
        var myElement = document.getElementById(intro_id);
        var topPos = myElement.offsetTop;
        if (topPos - 454 <= scrollPos && topPos - 454 + refElement.height() > scrollPos) {
            $(this).css("color", "red");
        }
        else {
            $(this).css("color", "black");
        }
    });
};

