var imgShow = document.getElementsByClassName('parent')[0],dotList = document.querySelectorAll('.dots >.clearfix > li');
    var btnLeft = document.getElementsByClassName('btnLeft')[0],btnRight = document.getElementsByClassName('btnRight')[0];
    var dotLen = dotList.length,index = 0; //輪播層的圖片索引，0表示第一張
     
    //圓點顯示
    
    function showRadius() {
    
        
        dotList[index].className = "on";
    }
    
    btnLeft.onclick = function() {
        index--;
        if(index < 0){ /*第1張向左時，變為第5張*/
            index =2;
      }
        showRadius();
            var left;
            var imgLeft = imgShow.style.left;
            if(imgLeft === "0px") { /*當是第1張時，每張圖片左移，移4張圖，位置為-(4*500)*/
                left = -1700;
            }
            else{
    
                left = parseInt(imgLeft) + 850; /*由於left為負數，每左移一張加500*/
            }
     imgShow.style.left = left + "px";
    }
    
    btnRight.onclick = function() {
        index++;
        if(index > 2){ /*第5張向右時，變為第1張*/
            index = 0;
        }
        showRadius();
        var right;
        var imgLeft = imgShow.style.left;
        if(imgLeft === "-1700px") { /*當是第5張時，第1張的位置為0*/
            right = 0;
        }
        else{
            right = parseInt(imgLeft) - 850; /*由於left為負數，每右移一張減500*/
        }
        imgShow.style.left = right + "px";
    }
    
    // 自動輪播
    
    var timer;
    
    function autoPlay() {
    
    timer = setInterval(function() {
        var right;
        var imgLeft = imgShow.style.left;
        if(imgLeft === "-1700px") {
         right = 0;
        }
        else{
      right = parseInt(imgLeft) - 850;
        }
     imgShow.style.left = right + "px";
    },5000)
    }
    autoPlay();
    (function(i) {
       dotList[i].onclick = function() {
         var dis = index - i; //當前位置和點選的距離
         imgShow.style.left = (parseInt(imgShow.style.left) + dis * 850) + "px";
         index = i; //顯示當前位置的圓
         showRadius();
        }
    
    })(i);