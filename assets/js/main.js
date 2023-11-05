var words = [" I'm Developer!"],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
    setInterval(function () {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count == skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        }
        else {
            if (offset == 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
            if (forwards) {
                offset++;
            }
            else {
                offset--;
            }
        }
        $('.word').text(part);
    }, speed);
};

$(document).ready(function () {
    wordflick();
});

function select_nav(wanna_actived) {
    $(".navbar-nav a").each(function () {
        $(this).show();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        }
    });
    // $(wanna_actived).addClass("active");
    if (wanna_actived != "#home_b") {
        $(wanna_actived).hide();
    }

}

function select_section(section_) {

    $('section').each(function () {
        $(this).hide();
    });
    $('.where_Im').hide();

    // Reacomoda la barra morada y la foto de perfil
    $('.aside-morado').animate({
        width: 900
    }, 500);
    $('.profile-photo').animate({
        right: 950,
        top: '15%'
    }, 500);
    $('.profile-photo img').animate({
        width: 500
    }, 500);

    $(section_).show();
    boton = section_ + "_b";
    select_nav(boton);

    // $('#where_Im').css("animation", "parpadeo 0.4s infinite alternate");
    switch (section_) {
        case '#about':
            $('#where_Im_about').show();
            break;
        case '#education':
            $('#where_Im_education').show();
            break;
        case '#skills':
            $('#where_Im_skills').show();
            break;
        case '#experience':
            $('#where_Im_experience').show();
            break;
    }
}

/* Funcion de transicion entre secciones */
$(document).ready(function () {
    $('#home_b').click(function () {
        select_nav('#home_b');
        $('.where_Im').hide();
        $('#about').hide();
        $('#education').hide();
        $('#skills').hide();
        $('#experience').hide();

        $('#home').animate({
            opacity: 1
        }, 500, function () {   
            $(this).show(); // Una vez que se complete la animación, oculta el elemento.
        });
        $('.aside-morado').animate({
            width: 300
        }, 500);
        $('.profile-photo').animate({
            right: 20,
            top: '10%'
        }, 500);
        $('.profile-photo img').animate({
            width: 600
        }, 500);
    });
});

//** Animacion Skills */
$(".contenedor-bloque").hover(function(){
    $('.contenido-item').fadeIn("slow");
});