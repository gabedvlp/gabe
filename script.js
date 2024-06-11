let slideIndex = 1;
showSlides(slideIndex);
//BOTÕES PROXIMO E ANTERIOR
function slide(n) {
    showSlides(slideIndex += n);
}
//DOTs
function currentSlide(n) {
    showSlides(slideIndex = n);
}
//SLIDE
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("info");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/*
function openCloseSub() {
    var elementoSub = document.getElementById("sub");
    if (elementoSub.offsetHeight == 0) {
        elementoSub.style.height = "100%";
    } else {
        elementoSub.style.height = "0";
    }
};
function abrirSecao() {
    var secao = document.getElementById("sec1");
    if (secao.style.display = "flex") {
        secao.style.display = "none";
    } else {
        secao.style.display = "flex";
    }
}*/