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

var isShow1 = false;
    var n1=0
    
    function s1() {       
        document.getElementById('10944122_2').style.display='';
        document.getElementById('10944222_2').style.display='none';
        document.getElementById('10944143_2').style.display='none';
        document.getElementById('10944243_2').style.display='none';
        document.getElementById("r1").style.backgroundColor='rgba(255, 38, 255, 0.692)';
        document.getElementById("r2").style.backgroundColor='';
        document.getElementById("r3").style.backgroundColor='';
        document.getElementById("r4").style.backgroundColor='';
        document.getElementById("about2").style.backgroundColor='rgba(255, 38, 255, 0.692)';
        document.getElementById("us").style.display='block';
        document.getElementById("aboutus").style.display='none';
    } 
    function s2() {
     
        document.getElementById('10944143_2').style.display='';
        document.getElementById('10944122_2').style.display='none'; 
        document.getElementById('10944243_2').style.display='none';
        document.getElementById('10944222_2').style.display='none';      
        document.getElementById("r2").style.backgroundColor='rgba(56, 56, 255, 0.7)';
        document.getElementById("r1").style.backgroundColor='';
        document.getElementById("r3").style.backgroundColor='';
        document.getElementById("r4").style.backgroundColor='';
        document.getElementById("about2").style.backgroundColor='rgba(56, 56, 255, 0.7)';
        document.getElementById("us").style.display='block';
        document.getElementById("aboutus").style.display='none';
    }
    function s3() {       
        document.getElementById('10944222_2').style.display='';
        document.getElementById('10944122_2').style.display='none';
        document.getElementById('10944143_2').style.display='none';
        document.getElementById('10944243_2').style.display='none';       
        document.getElementById("r3").style.backgroundColor='rgba(255, 25, 25, 0.705)';
        document.getElementById("r1").style.backgroundColor='';
        document.getElementById("r2").style.backgroundColor='';
        document.getElementById("r4").style.backgroundColor='';
        document.getElementById("about2").style.backgroundColor='rgba(255, 25, 25, 0.705)';
        document.getElementById("us").style.display='block';
        document.getElementById("aboutus").style.display='none';
    }
    function s4() {
     
        document.getElementById('10944243_2').style.display='';
        document.getElementById('10944222_2').style.display='none';
        document.getElementById('10944122_2').style.display='none';
        document.getElementById('10944143_2').style.display='none';
        document.getElementById("r4").style.backgroundColor='rgba(38, 255, 147, 0.7)';
        document.getElementById("r1").style.backgroundColor=''; 
        document.getElementById("r2").style.backgroundColor='';
        document.getElementById("r3").style.backgroundColor=''; 
        document.getElementById("about2").style.backgroundColor='rgba(38, 255, 147, 0.7)';  
        document.getElementById("us").style.display='block';
        document.getElementById("aboutus").style.display='none';
    }

