$(document).ready(function () {
    Scrolling0();
   

   
});
//------------------------------------------------------------
function Scrolling0() {
    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }

    });
}

