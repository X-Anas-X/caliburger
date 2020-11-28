'use strict';


var bar = document.getElementById('search-bar');

bar.addEventListener('click', searchBar);

function searchBar(e) {
    e.preventDefault();

}


$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()

    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
    )
})