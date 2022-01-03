var itemArry = [
    {
        img: "Testimg.jpg",
        username:"我會飛ㄟ",
        usercomment:"還行拉",
        userstar:4,
    },
    {
        
        img: "Testimg.jpg",
        username:"我會飛ㄟ",
        usercomment:"還行拉還行拉還行拉還行拉還行拉還行拉還行拉還行拉還行拉還行拉還行拉還行拉還行拉還行拉還行拉還行拉還行拉還行拉",
        userstar:4,
    },
    {
        
        img: "Testimg.jpg",
        username:"我會飛ㄟ",
        usercomment:"還行拉",
        userstar:4,
    },
    {
        
        img: "Testimg.jpg",
        username:"我會飛ㄟ",
        usercomment:"還行拉",
        userstar:4,
    }
];/*放評論資料*/ 

PrintcommentList();
/*列印評論*/ 
function PrintcommentList() {
var itemList = document.querySelector("#putincomment");
itemArry.forEach(function (item) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `<div class="comment1">
                        <div class="commentform1"><img src="assets/images/${item.img}" alt=""></div><!--引入使用者頭像-->
                        <div class="comment2">
                            <div>星級 ｜&nbsp;&nbsp;&nbsp; ${item.userstar} ◆</div><div>名字 ｜&nbsp;&nbsp; ${item.username}</div> 
                            <div class="commentarea"><span class="commentarea2" >評論 ｜</span><div class="commentarea1" >${item.usercomment}</div> </div><br>
                        </div>
                        <div style="clear:both;"></div>
                    </div>`;
    itemList.appendChild(newDiv);
});
}
    
/*星等程式碼  接收indexstar+1的數*/ 
window.onload=function(){
    var allStar = document.getElementsByClassName('star_content')[0];
    var aText =[1,2,3,4,5];

    Stars(allStar,aText);

    function Stars(id,Txt){
        var indexstar;
        var aStar = id.getElementsByClassName('howmuchstar');
        var oStars = id.getElementsByClassName('stars')[0];

        
        function gray(){
            for(let v=0;v<aStar.length;v++){
                aStar[v].style.backgroundColor = '#ccc';
            }
        }

        for(let i=0;i<aStar.length;i++){
            function starColor(){
                if(i<=1){
                    gray();
                    for(let t=0;t<=i;t++){
                        aStar[t].style.backgroundColor = '#999';
                    }
                }
                else{
                    gray();
                    for(let j=0;j<=i;j++){
                        aStar[j].style.backgroundColor = 'orange';
                    }
                }
            }
            
            aStar[i].onmouseover=function(){
                oStars.innerHTML = Txt[i];
                starColor();

                this.onmouseout=function(){
                    gray();
                    oStars.innerHTML = '評分';
                    if(indexstar===''){
                        return;
                    }
                    else if(indexstar<=1){
                        for(let n=0;n<=indexstar;n++){
                            aStar[n].style.backgroundColor = '#999';
                        }
                        oStars.innerHTML = Txt[indexstar];
                    }
                    else{
                        for(let m=0;m<=indexstar;m++){
                            aStar[m].style.backgroundColor = 'orange';
                        }
                        oStars.innerHTML = Txt[indexstar];
                    }
                }   
            }

            aStar[i].onclick=function(){
                this.onmouseout=null;
                oStars.innerHTML = Txt[i];
                if(i<=1){
                    for(let t=0;t<=i;t++){
                        aStar[t].style.backgroundColor = '#999';
                        indexstar=t;
                    }
                }
                else{
                    for(let j=0;j<=i;j++){
                        aStar[j].style.backgroundColor = 'orange';
                        indexstar=j;
                    }
                }
            }
        }
    }
}

/*簡介切換程式碼*/ 
var Comob = document.getElementsByClassName("commotextbut");
var Comopic = document.getElementsByClassName("textintroframe");

for (let i = 0; i < Comob.length; i++) {
    Comob[i].index=i;
    Comob[i].onclick = function () {
    for (let j = 0; j < Comob.length; j++) {
        Comob[j].className = 'commotextbut '; 
        Comopic[j].className = 'textintroframe ';
    }
    this.className += 'acti2';
    Comopic[this.index].className += 'show';

    };
}

var star1 = $(".star1").attr("value");/*document.getElementsByClassName('star1');*/
var star2 = document.getElementsByClassName('star2');
var star3 = document.getElementsByClassName('star3');
var star4 = document.getElementsByClassName('star4');
var star5 = document.getElementsByClassName('star5');
var allcomment = $(".allcomment").attr("value");/*document.getElementsByClassName('allcomment');*/

star1.style.height = (star1 / allcomment) +"%";
star2.style.height = star2*1 / allcomment*1 +"%";