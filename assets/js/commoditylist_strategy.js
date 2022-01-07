var itemArry = [
    {id:"23", 
    introduce:"皇輿爭霸這款遊戲非常之有名，榮獲非常多的獎項。    遊戲背景十分簡單，你是一個國家的君王，你爸媽死後給你七塊錢跟三個莊園。你覺得這樣還不夠，所以你想要壯大自己的國家。這一路上有非常多的資源讓你去購買使用，總之，這些東西能夠幫助你讓你的國家步入繁榮富貴。但是，這並非一人遊戲，所以其他小國君主也會跟你一起爭奪有限的地盤。所以要怎麼樣發展的最快，就看自己的本事了。    ", 
    character:"策略", 
    charhtml:"commoditylist_strategy",
    details:"commoditiy-23.html", 
    number:"50", 
    src:"assets/images/game/策略/皇輿爭霸.jpg", 
    price:"200", 
    desc:"皇輿爭霸", 
    src1:"assets/images/game/策略/皇輿爭霸2.jpg"}
    , 

    {id:"24", 
    introduce:"詭影尋蹤(Cryptid)是一款容易上手又很有樂趣的推理桌遊。玩家扮演生物學家尋找神秘生物的所在地，每個人都有各自的線索，要在遊戲中詢問彼此的線索，然後推理找出生物在地圖的正確位置。桌遊詭影尋蹤的規則非常簡易，卻設計得很有深度，線索組合有非常多的變化，遊戲過程需要大量邏輯燒腦，是款非常好玩的推理桌遊。", 
    character:"策略", 
    
    charhtml:"commoditylist_strategy",
    details:"commoditiy-24.html", 
    number:"50", 
    src:"assets/images/game/策略/詭影尋蹤.jpg", 
    price:"100", 
    desc:"詭影尋蹤", 
    src1:"assets/images/game/策略/詭影尋蹤2.jpg"}
    , 

    {id:"25", 
    introduce:"機密代號(Codenames)是一款猜字推理的桌遊，桌遊規則很簡單，卻可以玩到非常燒腦(也可以無腦輕鬆玩)。桌遊中玩家會分成兩隊，目標是要找出自己陣營的特務。每個特務會對應到一個代號，隊長要想出和代號相關的線索給隊員，讓隊員能夠透過線索找出同隊的特務卡，最先把同隊特務卡全部找出來的隊伍獲勝。桌遊的困難之處在隊長提供線索時，要避掉對方的特務卡和殺手卡，還要盡可能的將線索連結到好幾個特務代號上。整場桌遊的關鍵在隊長如何想出神來一筆的共通線索，快速找到特務卡。機密代號是一款規則簡單，有歡樂又需要動腦的桌遊。", 
    character:"策略", 
    charhtml:"commoditylist_strategy",
    details:"commoditiy-25.html", 
    number:"50", 
    src:"assets/images/game/策略/機密代號.jpg", 
    price:"200", 
    desc:"機密代號", 
    src1:"assets/images/game/策略/機密代號2.jpg"
    }
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