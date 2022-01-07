var itemArry = [
    {id:"10", 
    introduce:"「光合作用(Photosynthesis)」遊戲為2017年由Hjalmar Hach所設計的家庭遊戲，遊戲過程寓教於樂。遊戲中玩家們須在細小但肥沃的土地裏播種自家的樹木，想辦法讓自家的樹木吸收陽光照耀，努力成長茁壯，並且開枝散葉。遊戲進行時，玩家們藉著樹木進行光合作用，擷取太陽能源，並分配太陽資源讓樹木能順利滋養成長。每當一棵樹木生命週期完結時，玩家便能獲得分數。遊戲持續進行至太陽完成3次公轉時即告結束，玩家們分別計算自家最後所得分數，分數最高者即為遊戲贏家。", 
    character:"抽象", 
    charhtml:"commoditylist_abstract",
    details:"commoditiy-10.html", 
    number:"50", 
    src:"assets/images/game/抽象/光合作用.jpg", 
    price:"150", 
    desc:"光合作用", 
    src1:"assets/images/game/抽象/光合作用2.jpg"}
    , 

    {id:"11", 
    introduce:"拉密(Rummikub)這款桌遊是由以色列人發明，規則間單明瞭，能夠做非常多變化組合，某種程度上可以玩得很燒腦(但也可以無腦輕鬆玩，看對手是誰)。因為牌形是正方形，在洗牌的時候會發出如麻將的碰撞聲，因此又稱為以色列麻將。拉密除了是老少咸宜的桌遊，也可以當作競技型桌遊來比賽。目前已經在世界各地舉辦過好幾場大型賽事。", 
    character:"抽象", 
    charhtml:"commoditylist_abstract",
    details:"commoditiy-11.html", 
    number:"50", 
    src:"assets/images/game/抽象/拉密.jpg", 
    price:"150", 
    desc:"拉密", 
    src1:"assets/images/game/抽象/拉密2.jpg"}
    , 

    {id:"12", 
    introduce:"格格不入，又被稱作德國圍棋，是款玩法簡單但深具思考的抽象策略遊戲。    看起來雖像俄羅斯方塊，但實際上是像圍棋般的圈地。    玩家必須利用手中的方塊擴張自己的領地，阻止對方的侵入，並慢慢將手中的方塊出完。    遊戲曾獲2003年最佳動腦獎Mensa Select，也常被作為益智教具之用。    ", 
    character:"抽象", 
    charhtml:"commoditylist_abstract",
    details:"commoditiy-12.html", 
    number:"50", 
    src:"assets/images/game/抽象/格格不入.jpg", 
    price:"200", 
    desc:"格格不入", 
    src1:"assets/images/game/抽象/格格不入2.jpg"}
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