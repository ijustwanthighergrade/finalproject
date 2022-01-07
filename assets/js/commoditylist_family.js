var itemArry = [
    {id:"17", 
    introduce:"在聽到企鵝法老王金字塔的傳說後，四名勇敢的企鵝相約出發尋找這個神秘寶藏。    經過數個月的搜尋，企鵝冒險家在廢棄小學的校園中發現了線索！    在塵土的掩蓋下找到一道暗門，通過漫長的秘道，來到一個巨大的地下洞穴。    在洞穴的正中央矗立著傳說中企鵝法老王的古墓，當企鵝們踏進古墓的入口時，大門在他們身後「碰！」的一聲關上！    巨大的回音在漆黑的大廳中不斷回盪，終於一切恢復沈寂時，一個詭異的聲音慢慢清晰了起來……    這讓人感到不安的聲音從遠方的陰影中迎面而來，隨後一聲巨吼從黑暗中爆發……    「大膽竊賊，吾雖老邁，但將汝等永世禁錮於吾棺墓之法力仍在！」    天啊！木乃伊從沉睡中甦醒，現在尋寶企鵝得要加快腳步！    只有收集到正確的寶藏才能打破木乃伊的魔咒，從古墓中帶著最多的寶藏逃出生天吧！        ", 
    character:"家庭", 
    charhtml:"commoditylist_family",
    details:"commoditiy-17.html", 
    number:"50", 
    src:"assets/images/game/家庭/古墓企鵝.jpg", 
    price:"200", 
    desc:"古墓企鵝", 
    src1:"assets/images/game/家庭/古墓企鵝2.jpg"}
    , 

    {id:"18", 
    introduce:"情書(Love Letter)算是一款輕鬆小品的桌遊。規則機制很有趣，只有16張角色牌，每張牌有自己的能力可以牽制對手。遊戲背景是玩家想要追求公主，想要透過情書表達愛意，但必須透過公主身邊的人才能把情書傳遞給她。在經過數輪，玩家把手上的角色牌都打出後，最後持有的手牌最親近公主就獲勝。桌遊規則非常簡單，節奏也很明快，是個簡易上手的小型桌遊。", 
    character:"家庭", 
    charhtml:"commoditylist_family",
    details:"commoditiy-18.html", 
    number:"50", 
    src:"assets/images/game/家庭/情書.jpg", 
    price:"100", 
    desc:"情書", 
    src1:"assets/images/game/家庭/情書2.jpg"}
    , 

    {id:"19", 
    introduce:"每位玩家同時從10張手牌中打出一張，並依規則將牌接到桌面上4列牌陣中的一列，若你的牌成為一列中的第6張，就必須將前面的5張牌拿起，每張牌上有數量不等的牛頭。", 
    character:"家庭", 
    details:"commoditiy-19.html", 
    charhtml:"commoditylist_family",
    number:"50", 
    src:"assets/images/game/家庭/誰是牛頭王.jpg", 
    price:"200", 
    desc:"誰是牛頭王", 
    src1:"assets/images/game/家庭/誰是牛頭王2.jpg"}
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