var Certib = document.getElementsByClassName("subbut");
var Certipic = document.getElementsByClassName("canuseframe");

for (let i = 0; i < Certib.length; i++) {
    Certib[i].index=i;
    Certib[i].onclick = function () {
    for (let j = 0; j < Certib.length; j++) {
        Certib[j].className = 'subbut '; 
        Certipic[j].className = 'canuseframe ';
    }
    this.className += 'acti';
    Certipic[this.index].className += 'show';

    };
}

var log_content = document.getElementById("Box");
var btn = document.getElementById("myBtn");
btn.onclick = function() {
  log_content.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == log_content) {
    log_content.style.display = "none";
  }
}

function gobacktop() {
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
    scrolldelay = setTimeout('pageScroll()',10);
}

window.onscroll = function () { 
    var backtop = document.getElementsByClassName("top")[0];
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(top);
    if(top < 400)
        backtop.style.opacity = '0%' ;
    else
        backtop.style.opacity='100%';

 }
/*
$(document).ready(function() {
    $.extend({
        'goAnchor': function(to, time) {
            $obj = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
            $($obj).animate({
                scrollTop: to
            }, time);
        }
    });
    $('#click').click(function() {
        $.goAnchor($('#target').offset().top, 1000);
    });
    $('#progress').click(function() {
        $.goAnchor($('#target').offset().top, 1000);
    });
});

var bodyClass = document.body.classList;
var lastScrollY = 0;
window.addEventListener('scroll', function(){
    var st = this.scrollY;
    /* 判斷是向上捲動，而且捲軸超過 200px */
    /*
    if( st < lastScrollY) {
        bodyClass.remove('hideUp');
    } else {
        bodyClass.add('hideUp');
    }
    lastScrollY = st;
});
*/
  
