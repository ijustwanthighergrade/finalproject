var itemArry = [{
    img: "Testimg.jpg",
    title: "說書人",
    characteristic: "策略",
    price: 12,
    herfcommo: "354",
    herfbuynow: "123",
    hot: 5
},
{
    img: "/game/",
    title: "2",
    characteristic: "派對",
    price: 3,
    herfcommo: "45",
    herfbuynow: "123",
    hot: 5
},
{
    img: "/game/",
    title: "3",
    characteristic: "陣營",
    price: 25,
    herfcommo: "54",
    herfbuynow: "123",
    hot: 5
},
{
    img: "Testimg.jpg",
    title: "4",
    characteristic: "95",
    price: 45,
    herfcommo: "5",
    herfbuynow: "123",
    hot: 5
},
{
    img: "Testimg.jpg",
    title: "4",
    characteristic: "95",
    price: 45,
    herfcommo: "5",
    herfbuynow: "123",
    hot: 5
},
];
PrintList();

function PrintList() {
var itemList = document.querySelector("#itemList");
itemArry.forEach(function (item) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `<div class="commodity_1">
                            <div class="putimgin">
                                <img src="assets/images/${item.img}" alt="">
                            </div>
                            <a href="${item.buynow}"><div class="buy cobut">Buy Now</div></a>
                            <a href="${item.herfcommo}"><div class="detail cobut">Details</div></a>
                            <div class="commoditytext">
                                <h2>${item.title}<br><p class="chara"><a href="">#${item.characteristic}</a></p> </h2><br>
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
