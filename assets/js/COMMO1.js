var itemArry = [

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
PrintCOMMO();
function PrintCOMMO() {
    let itemList = document.querySelector("#COMMOINFO");
    itemArry.forEach(function (item) {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `       
        <div class=""><!--引入圖片-->
            <div class="slideshow-container"> 
                <div class="mySlides1">
                <img src="${item.src}" style="width:100%">
                </div>
            
                <div class="mySlides1">
                <img src="${item.src1}" style="width:100%">
                </div>          
                <a class="prev" onclick="plusSlides(-1, 0)">&#10094;</a>
                <a class="next" onclick="plusSlides(1, 0)">&#10095;</a>
            </div>
        <form action="addcar.jsp" class="commoform" >
            <table>
                <tr><h1>${item.desc}</h1><td>平均評價： 4.5 ★</td><td>總評價數：3</td><td>庫存：${item.number}</td></tr> <!--引入商品名-->
                <!--引入平均星等 總評價數 庫存量-->
                <tr style="height: 30px;"></tr>
                <input type="hidden" value="" name="productid" >
                <tr><td><div >價格</div></td><td><div class="price" >$${item.price}</div></td></tr> <!--引入價格-->
                <tr><td> 數量</td><td class="howmuch" ><input class="price" type="button" value="-" onclick="">
                <input type="text" class="piece price" value="0" name="number" id="">
                <input type="button" class="price" value="+" onclick=""></td>
                </tr>
                
            </table>
            
            <div class="commobut1"><input type="submit" class="butfunction" value="加到購物車" name=""><!--加到購物車-->
                <input type="button" value="直接購買" class="butfunction"><!--直接購買--></div>
                <div class="commobut2"><input type="button" value="加到最愛 ♥" class="butfunction"><!--加到最愛--></div>
        </form>
        <div style="clear: both;"></div>`;
        itemList.appendChild(newDiv);
    });
}
