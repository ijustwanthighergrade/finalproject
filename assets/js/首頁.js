var Certib = document.getElementsByClassName("subbut");
var Certipic = document.getElementsByClassName("canuseframe");

for (var i = 0; i < Certib.length; i++) {
    Certib[i].index=i;
    Certib[i].onclick = function () {
    for (var j = 0; j < Certib.length; j++) {
        Certib[j].className = 'subbut '; 
        Certipic[j].className = 'canuseframe ';
    }
    this.className += 'acti';
    Certipic[this.index].className += 'show';

    };
}

var log_content = document.getElementById("Box");
// Get the button that opens the log_content
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the log_content
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the log_content 
btn.onclick = function() {
  log_content.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == log_content) {
    log_content.style.display = "none";
  }
}


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
var bodyClass = document.body.classList,
    lastScrollY = 0;
window.addEventListener('scroll', function(){
    var st = this.scrollY;
    /* 判斷是向上捲動，而且捲軸超過 200px */
    if( st < lastScrollY) {
        bodyClass.remove('hideUp');
    } else {
        bodyClass.add('hideUp');
    }
    lastScrollY = st;
});
