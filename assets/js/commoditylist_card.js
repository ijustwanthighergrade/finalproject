var itemArry = [ {
    id:"4",
introduce:"今晚要吃誰是一款合作遊戲，所有玩家遇上空難，流落荒島，你們會有多快就決定要吃人呢? 出於不明原因，你們的飛機墜落，一群倖存者被沖上了荒島。    為了逃出生天，你們必須蒐集資源，建造木筏，離開這鬼地方。但實物逐漸枯竭，神智也在消逝，越是努力求生，身邊的倖存者越顯得可口...    你們很清楚不是所有人都能活著逃出，只有強者能生存到最後。可是在肉體力量以外，你們還隱約感受到這裡有一股超自然的氣息一一靈魂的世界和物質世界有某到連接，使得兩者只有一線之隔。    若你們受飢餓驅使，吃掉別的倖存者，不但你們會陷入瘋狂，還會招來怨魂報復，用盡方法阻止你們離開...        ",
    character:"卡牌",
    charhtml:"commoditylist_card",
details:"commoditiy-4.html",
number:"50",
src:"assets/images/game/卡牌/今晚要吃誰.jpg",
price:"200",
desc:"今晚要吃誰",
src1:"assets/images/game/卡牌/今晚要吃誰2.jpg"}
,
{id:"5",
introduce:"犯人在跳舞(Criminal Dance)是一款陣營推理類桌遊。遊戲規則很簡單，玩家要用偵探牌和神犬牌抓出犯人牌在哪邊。桌遊卡牌有13種類型，許多卡牌效果會讓犯人牌在不同玩家手上跑來跑去，很有遊戲名稱”犯人在跳舞”的感覺，讓遊戲過程增加很多樂趣。玩家可以互相陷害，或是推理出犯人牌跑到誰的手上。犯人在跳舞是款老少咸宜的輕鬆小品桌遊。",
character:"卡牌",
charhtml:"commoditylist_card",
details:"commoditiy-5.html",
number:"50",
src:"assets/images/game/卡牌/犯人在跳舞.jpg",
price:"200",
desc:"犯人在跳舞",
src1:"assets/images/game/卡牌/犯人在跳舞2.jpg"}
,
{id:"6",
introduce:"在《榮耀之城》中，只有最傑出的玩家才能成為王國下一任建築大師。為此，玩家們必須運用自己的建築技巧，贏得君王的青睞。在一輪中，玩家各選一個角色，從而在自己的回合獲得特殊能力。每位玩家通過從手上打出卡牌來在自己的城市中建造建築，並在遊戲結束時，獲得等同於建築費用的分數。    ",
character:"卡牌",
charhtml:"commoditylist_card",
details:"commoditiy-6.html", 
number:"50", 
src:"assets/images/game/卡牌/榮耀之城.jpg", 
price:"100", 
desc:"榮耀之城", 
src1:"assets/images/game/卡牌/榮耀之城2.jpg"}
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