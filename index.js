const sliders = document.querySelector(".carouselbox");
var scrollPerClick;
var ImagePadding = 20;

showMovieData();

var scrollAmount = 0;

function sliderScrollLeft() {
    sliders.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick), 
        behavior: "smooth"
    });

     if (scrollAmount < 0) {
        scrollAmount = 0;
    }
}

function sliderScrollRight() {
    if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
        sliders.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick), 
            behavior: "smooth",
        });
    }
}

async function showMovieData() {
    const api_key = "fd2898d4befc14efed91b9323390b18a";

    var result = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=" 
        + api_key +
         "&sort_by=popularity.desc"
    );

    result = result.data.results;
        
    result.map(function(curr,inde) {
        sliders. insertAdjacentHTML(
            'beforeend',
            '<img class = "img-${inde} slider img"src="https://image.tmdb.org/t/p/w185/${curr.poster_path}" />'
        )
    })
    
    scrollPerClick = document.querySelector(".img-1").clientWidth + ImagePadding;
}