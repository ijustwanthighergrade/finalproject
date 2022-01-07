var itemArry = [     {
    id:"1",
    introduce:"印加寶藏(Incan Gold)是款小型的派對桌遊，規則簡單、節奏明快。玩家扮演探險家到印加古神廟尋寶，在每次翻開新的探索卡前，要各自決定是否繼續探索，選擇回到營地可以留住寶石，選擇繼續探索下去可能會遇到災難而失去所有寶石。因為相同選擇的玩家會均分寶石，隨著繼續探索的玩家越來越少，瓜分的寶石也會越來越多，因此風險越大、獲利越多。對於回營地的玩家也不是全沒好處，只要能單獨回營地，就可以拿走被發現的神器。遊戲過程要猜測其他人會做哪種選擇，以及判斷下一張會出現災難牌的可能性。如何做好風險控管，見好就收或冒險挺進，是這款桌遊的樂趣所在。",
    character:"心機",
    details:"commoditiy-1.html",
    charhtml:"commoditylist_mind",
    number:"50",
    src:"assets/images/game/心機/印加寶藏.jpg",
    price:"100",
    desc:"印加寶藏",
    src1:"assets/images/game/心機/印加寶藏2.jpg"
},
{
id:"2",
introduce:"德國蟑螂是一款獲得不少獎項的桌遊，遊戲中玩家們須發揮吹牛唬人的功力，讓對方能夠完全信服你說的話。同時亦要具備冷靜看人的能力，判斷對方所說的話是否屬實。遊戲在玩家間的爾虞我詐中進行，既據心機又富趣味。玩家須儘可能的把八種人類討厭的生物趕往至別家手中，當有一玩家收滿八種生物、集滿四張相同生物或是無牌可出時，即為遊戲輸家。",
character:"心機",
details:"commoditiy-2.html",
charhtml:"commoditylist_mind",
number:"50",
src:"assets/images/game/心機/德國蟑螂.jpg",
price:"200",
desc:"德國蟑螂",
src1:"assets/images/game/心機/德國蟑螂2.jpg"
},
{id:"3",
introduce:"獵巫鎮(Salem 1692)和桌遊狼人殺的機制有點類似，分成女巫、村民兩大陣營。在夜晚階段，女巫陣營要殺掉全部村民，村民有自己的角色能力，也有警長角色可以保護村民不被殺害。村民陣營只需要找出【女巫牌】在誰身上並翻開就可以獲勝。不過獵巫鎮的村民陣營沒有能力者知道玩家的真實身份，少了這個重要資訊，很容易變成好人間沒有邏輯的互相廝殺，但這也是有趣的地方。隨著遊戲進行下去，村民陣營的玩家會漸漸變成女巫陣營的人，或者因為自相殘殺而死光光。獵巫鎮的遊戲背景是來自於一個美國小鎮的真實故事，讓玩家體驗受到邪教迫害的荒誕場景。",
character:"心機",
charhtml:"commoditylist_mind",
details:"commoditiy-3.html",
number:"50",
src:"assets/images/game/心機/獵巫鎮.jpg",
price:"200",
desc:"獵巫鎮",
src1:"assets/images/game/心機/獵巫鎮2.jpg"}
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