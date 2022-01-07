var Inforb = document.getElementsByClassName("inforbut");
var Inforpic = document.getElementsByClassName("inforframe");

for (var a = 0; a < Inforb.length; a++) {
    Inforb[a].index=a;
    Inforb[a].onclick = function () {
    for (var b = 0; b < Inforb.length; b++) {
        Inforb[b].className = 'inforbut '; 
        Inforpic[b].className = 'inforframe ';
    }
    this.className += 'acti1';
    Inforpic[this.index].className += 'show';

    };
}
