var q = 5;

var container = '';
for (i = 1; i < q; i++) {
    container += '<div class="mySlides"><div class="number">' + i + ' / ' + (q - 1) + '</div><img src="img/img' + i + '.jpg" /></div>';
}
container += '<a class="arrow prev" onclick="plusSlides(-1)">&#10094</a><a class="arrow next" onclick="plusSlides(1)">&#10095</a>';
container += '<div class="caption-container"><p id="caption"></p></div>';
container += '<div class="small_container"></div>';
document.getElementsByClassName("container")[0].innerHTML = container;


var text = [
    "woods",
    "houses",
    "mountains",
    "sea"
];


var small_container = '';
for (i = 1; i < q; i++) {
    small_container += '<div class="small"><img class="demo" src="img/img' + i + '.jpg" onclick="currentSlide(' + i + ')" alt="' + text[i - 1] + '"></div>';
}
document.getElementsByClassName("small_container")[0].innerHTML = small_container;




var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}