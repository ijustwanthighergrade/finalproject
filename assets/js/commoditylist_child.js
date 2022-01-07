var itemArry = [    {id:"7", 
introduce:"這個歡樂的隊伍是由七隻不同顏色的小豬所組成的，對牠們來說沒有比奔跑更快樂的事情了。    然而跑道非常狹窄，如果要超越其他小豬，勢必要從其他小豬上頭爬過去，或者騎在別人背上搭趟順風車也不錯！    雖然牠們是小豬，但對牠們來說這一點也不困難，因為牠們不是一般的豬喔，牠們可是經過馬戲團訓練的特技小豬！    除了奔跑外，牠們也喜歡聚在一起疊羅漢，高超的技巧與精湛的演出絕對令人瞠目結舌！（提供各種金字塔形式讓你挑戰喔）    這是一個輕鬆，可愛的輕鬆小品，簡單易懂的遊戲規則，逗趣可愛的遊戲過程，適合閤家同樂！        ", 
character:"兒童", 
charhtml:"commoditylist_child",
details:"commoditiy-7.html", 
number:"50", 
src:"assets/images/game/兒童/七彩跑跑豬.jpg", 
price:"200", 
desc:"七彩跑跑豬", 
src1:"assets/images/game/兒童/七彩跑跑豬2.jpg"}
, 

{id:"8", 
introduce:"這是個適合在派對時遊玩的遊戲,玩家需要靠著眨眼的暗示來找到跟他有同張卡片的夥伴！但說者有意、聽著無心，要想辦法讓在天涯一方的夥伴接收到你的暗號，玩起來其實沒那麼簡單喲！但要小心，其他玩家也可以抓到你的暗示喔，所以要小心不要讓別人發現，偷偷地傳送暗示給你的夥伴吧！", 
character:"兒童", 
charhtml:"commoditylist_child",
details:"commoditiy-8.html", 
number:"50", 
src:"assets/images/game/兒童/眨眨眼.jpg", 
price:"200", 
desc:"眨眨眼", 
src1:"assets/images/game/兒童/眨眨眼2.jpg"}
, 

{id:"9", 
introduce:"《閃靈快手》是一款非常容易入門的桌遊，盒中總共有5種可愛的物件，就是〈白色的鬼〉、〈綠色的瓶子〉、〈藍色的書〉、〈紅色的椅子〉跟〈灰色的老鼠〉。把5個物件擺在桌上，翻開一張牌，根據牌上顯示的圖案抓取正確的物件。非常簡單，考驗玩家的眼力與反應，適合全家大小一起遊玩！", 
character:"兒童", 
charhtml:"commoditylist_child",
details:"commoditiy-9.html", 
number:"50", 
src:"assets/images/game/兒童/閃靈快手.jpg", 
price:"150", 
desc:"閃靈快手", 
src1:"assets/images/game/兒童/閃靈快手2.jpg"}
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