
var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(c, no) {
    showSlides(slideIndex[no] += c, no);
}
function imgclick(k){
    var x = document.getElementsByClassName(slideId[k]);

    slideIndex[k] = k;
    for (b = 0; b < x.length; b++) {
        x[b].style.display = "none";  
    }
    x[slideIndex[no]-1].style.display = "block";  
}

function showSlides(c, no) {
    var b;
    var x = document.getElementsByClassName(slideId[no]);
    if (c > x.length) {
        slideIndex[no] = 1;
    }    
    if (c < 1) {
        slideIndex[no] = x.length;
    }
    for (b = 0; b < x.length; b++) {
        x[b].style.display = "none";  
    }
    x[slideIndex[no]-1].style.display = "block";  
}


  