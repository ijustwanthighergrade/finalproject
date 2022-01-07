var itemArry = [
    {id:"13", 
    introduce:"大富翁是一種多人策略擲賽遊戲。參賽者分得遊戲金錢，憑運氣（擲骰子）及交易策略，買地、建樓以賺取租金。依靠自己的賺錢策略獲得最大的財富吧", 
    character:"派對", 
    charhtml:"commoditylist_party",
    details:"commoditiy-13.html", 
    number:"50", 
    src:"assets/images/game/派對/大富翁.jpg", 
    price:"100", 
    desc:"大富翁", 
    src1:"assets/images/game/派對/大富翁2.jpg"}
    , 

    {id:"14", 
    introduce:"在作弊飛蛾(Cheating Moth)遊戲中，玩家可以理直氣壯的作弊玩桌遊，而且只有靠作弊才能出完牌！要如何躲過不被發現作弊，完全看你的作弊技巧好不好！偷藏牌過程會讓人心跳加速。這款遊戲加入了規則之外的規則，讓整場遊戲歡笑不斷，作弊飛蛾是一款破冰的好玩桌遊！", 
    character:"派對", 
    charhtml:"commoditylist_party",
    details:"commoditiy-14.html", 
    number:"50", 
    src:"assets/images/game/派對/作弊飛蛾.jpg", 
    price:"200", 
    desc:"作弊飛蛾", 
    src1:"assets/images/game/派對/作弊飛蛾2.jpg"}
    , 

    {id:"15", 
    introduce:"屏氣凝神！插圖即將掀開了！這些插圖都圍繞著一個主題：一段令人費解的句子。但是，這段句子實際上是源於這五張插圖之一，到底是哪一張呢？    利用你的天賦及直覺來找到它，同時也要躲開其他玩家所設下的陷阱。     妙語說書人是一款令人感到驚奇、歡樂以及興奮的遊戲，適合讓全家以及朋友們一起享受、出人意料的歡樂派對遊戲    ", 
    character:"派對", 
    details:"commoditiy-15.html", 
    charhtml:"commoditylist_party",
    number:"50", 
    src:"assets/images/game/派對/妙語說書人.jpg", 
    price:"150", 
    desc:"妙語說書人", 
    src1:"assets/images/game/派對/妙語說書人2.jpg"}
    , 

    {id:"16", 
    introduce:"辛勤的小矮人們在礦坑中賣力地工作，期望能夠挖到金礦。    然而他們當中卻混入了幾個想獨吞礦藏的壞蛋，不斷趁人不注意時暗自破壞。假如好人們成功的開闢一條通往寶藏的隧道，他們可以得到金塊，而妨礙者則落得兩手空空。    然而，假如好人們失敗了，那麼妨礙者就能夠得到金塊。    到底鹿死誰手，這就要各憑本事了。    ", 
    character:"派對", 
    charhtml:"commoditylist_party",
    details:"commoditiy-16.html", 
    number:"50", 
    src:"assets/images/game/派對/矮人礦坑.jpg", 
    price:"200", 
    desc:"矮人礦坑", 
    src1:"assets/images/game/派對/矮人礦坑2.jpg"}
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