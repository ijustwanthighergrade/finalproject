var itemArry = [
    {id:"20", 
    introduce:"  BANG(砰)桌遊背景是美國的西部荒漠，玩家會扮演鎮上的角色：警長、副警長、歹徒和叛徒。每個角色都有自己的目標要達成，但卻不知道彼此的真實身份。BANG遊戲一開始抽取【角色牌】，讓玩家獲取額外的特殊能力，接著輪流抽牌來獲取裝備，子彈和其他能力。玩家之間的距離決定了攻擊範圍，透過裝備射程更遠的手槍，才可以射擊到敵人。桌遊中的玩家身份必須保密，究竟誰才是敵人，只能透過生死決鬥後才能夠曉得！", 
    character:"陣營", 
    details:"commoditiy-20.html", 
    charhtml:"commoditylist_camp",
    number:"50", 
    src:"assets/images/game/陣營/BANG(砰).jpg", 
    price:"100", 
    desc:"BANG(砰)", 
    src1:"assets/images/game/陣營/BANG(砰)2.jpg"}
    , 

    {id:"21", 
    introduce:"阿瓦隆為一款經典心機鬥智遊戲，遊戲中分為好人與邪惡陣營，在摸不清所有人身份下，不要輕易相信任何人。當你選中好人陣營，該如何去猜測誰是好人誰是壞人？當你選中邪惡陣營，又該如何隱藏自己的身份，不被好人識破？阿瓦隆需要你觀察他人的言語，明辨是非判斷真偽，並適時地表明立場陣營，讓自己被他人相信，此遊戲只有一個人能信任，就是你自己。", 
    character:"陣營", 
    details:"commoditiy-21.html", 
    charhtml:"commoditylist_camp",
    number:"50", 
    src:"assets/images/game/陣營/阿瓦隆.jpg", 
    price:"200", 
    desc:"阿瓦隆", 
    src1:"assets/images/game/陣營/阿瓦隆2.jpg"}
    , 

    {id:"22", 
    introduce:"狼人真言(Werewords)是加入了狼人殺陣營元素的猜字桌遊。玩家分成兩隊，好人陣營要猜出答案，狼人陣營要故意誤導好人陣營，要在時間結束讓大家猜謎失敗。規則機制蠻有創意的，流程簡單易懂，並且加入了手機APP當作輔助，有APP語音主持流程，讓每位玩家都可以加入遊戲，是款老少咸宜的桌遊小品。", 
    character:"陣營", 
    charhtml:"commoditylist_camp",
    details:"commoditiy-22.html", 
    number:"50", 
    src:"assets/images/game/陣營/狼人真言.jpg", 
    price:"100", 
    desc:"狼人真言", 
    src1:"assets/images/game/陣營/狼人真言2.jpg"}
];
PrintList();

function PrintList() {
    var itemList = document.querySelector("#itemList");
    itemArry.forEach(function (item) {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `<div class="commodity_1">
                                <div class="putimgin">
                                    <img src="${item.src}" alt="">
                                </div>
                                <a href="Cart.html"><div class="buy cobut">Buy Now</div></a>
                                <a href="${item.details}"><div class="detail cobut">Details</div></a>
                                <div class="commoditytext">
                                    <h2>${item.desc}<br><p class="chara"><a href="${item.charhtml}.html">#${item.character}</a></p> </h2><br>
                                    <h3>$${item.price}</<h3>
                                    <input type="button" class="tocart" value="Cart">
                                </div>
                            </div>`;
        itemList.appendChild(newDiv);
    });
}

function Change(sv) {

    if (sv == null) {
        var obj = document.getElementById("itemList");
        obj.innerHTML = "";
        for (let i = 0; i < obj.childNodes.length; i++) {
            obj.removeChild[i];
        }
        PrintList();
    }
    if (sv == 1) {
        itemArry.sort(function (a, b) {
            return a.hot - b.hot;
        });
        var obj = document.getElementById("itemList");
        obj.innerHTML = "";

        for (let i = 0; i < obj.childNodes.length; i++) {
            obj.removeChild[i];
        }
        PrintList();
    }
    if (sv == 2) {
        itemArry.sort(function (a, b) {
            return b.price - a.price;
        });
        var obj = document.getElementById("itemList");
        obj.innerHTML = "";
        for (let i = 0; i < obj.childNodes.length; i++) {
            obj.removeChild[i];
        }

        PrintList();

    }
    if (sv == 3) {
        itemArry.sort(function (a, b) {
            return a.price - b.price;
        });

        var obj = document.getElementById("itemList");
        obj.innerHTML = "";
        for (let i = 0; i < obj.childNodes.length; i++) {
            obj.removeChild[i];
        }
        PrintList();

    }
}

function CheckboxChange() {
    var checktotal = document.getElementById("checktotal");
    if ( checktotal.checked ) {
        for (let i = 0; i < itemArry[i].length; i++) {
        if ( itemArry[i].characteristic == "策略" )
            itemArry[i].style.display = "none";
        else
            itemArry[i].style.display = "block";
    }
    }
    

}