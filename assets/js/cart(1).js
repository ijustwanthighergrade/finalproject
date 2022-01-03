var buyArray = [{
        id: 1,
        img: "Testimg.jpg",
        title: "說書人",
        price: 12,
        much: 1,
        amount: 0
    },
    {
        id: 2,
        img: "game/心機/印加寶藏.jpg",
        title: "古墓企鵝",
        price: 12,
        much: 1,
        amount: 0
    },
    {
        id: 3,
        img: "Testimg.jpg",
        title: "說書人",
        price: 12,
        much: 2,
        amount: 0
    },
];

TotalPrice(buyArray); /*網頁一跑就列印選ㄉ商品*/

function add(data) {
    buyArray.map((buy) => {
        if (buy.id == data)
            buy.much++;
    })
    TotalPrice(buyArray);
}

function cancel(data) {
    /*刪除資料*/
    /*這怎麼寫啊哭阿*/
    buyArray.map((buy) => {
        if (buy.id == data) {
            let checkcencel = confirm("確定取消訂單?如按確認則訂單取消，若要保留請按取消。");
            if (checkcencel) {
                buy.much = -1; /*萬一他刪掉的話much的傳回值應該要+1 這邊只是為了讓他刪除資料而已 但好像沒了就沒傳*/
            }
        }
        minus();
    })
}

function minus(data) {
    buyArray.map((buy) => {
        if (buy.id == data) {
            if (buy.much == 0) {
                let checkcencel = confirm("確定取消訂單?如按確認則訂單取消，若要保留請按取消。");
                if (checkcencel) {
                    buy.much = -1; /*萬一他刪掉的話much的傳回值應該要+1 這邊只是為了讓他刪除資料而已 但好像沒了就沒傳*/
                } else
                    buy.much = 1;
            } else
                buy.much--;
        }
    })
    TotalPrice(buyArray);
}

function TotalPrice() {
    let putcartimg = document.getElementById("buyList");
    let tp = document.getElementById("Totalprice");
    let sumall = 0,
        dealcal = "";
    let howmuch = 0,
        howmuchcancel = 0;
    for (let i = 0; i < buyArray.length; i++) {
        /*dealcal純粹列印*/
        buyArray[i].amount = buyArray[i].price * buyArray[i].much; /*amount是商品單價*/
        howmuch += buyArray[i].much; /*算共買幾個商品*/
        /*這塊列印選的商品*/
        if (buyArray[i].much >= 0) {
            /*只印商品數>=0的值*/
            dealcal += `<div class="cart"> 
                            <div class="putcartimg">
                                <img src="assets/images/${buyArray[i].img}" alt="">
                            </div>
                            
                            <input class="commoname commotext" align="middle" type="text" value="${buyArray[i].title}" name="" id="commodityname" disabled="disabled">
                                    
                            <input class="price commotext" align="middle" type="text" value="$${buyArray[i].price}" name="" id="commodityprice" disabled="disabled">
                                  
                            <div class="much commotext">
                                <div >
                                    <input class="much commotext" type="button" value="-" onclick="minus(${buyArray[i].id})">
                                    <input type="text" class="much commotext" value="${buyArray[i].much}" name="much" id="commodityhowmuch">
                                    <input type="button" class="much commotext" value="+" onclick="add(${buyArray[i].id})">
                                </div>
                            </div>
                            <input class=" commotext" align="middle" type="text" value="$${buyArray[i].amount}" name="" id="commodityamount" disabled="disabled">
                            <input type="button" class="cancel commotext" value="x" onclick="cancel(${buyArray[i].id})">

                            <br>
                        </div>`;
            sumall += buyArray[i].amount; /*sumall是所有商品的金額*/
        }
        if (buyArray[i].much == -1) {
            howmuchcancel++;
        }

    };
    howmuch += howmuchcancel;
    putcartimg.innerHTML = dealcal;
    /*這塊列印表單跟確認送出*/
    tp.innerHTML = `<hr style="clear:both;"><div class="totalframe">
                        <div>總金額：<input type="text" class="tpc" name="totalprice" value="$${sumall}" id="totalprice" disabled="disabled"></div>
                        <div>總件數：<input type="text" class="tpc" name="totalmuch" value="${howmuch}" id="totalmuch" disabled="disabled"></div>
                        <div><input type="Submit" value="確認送出" class="submitbut" onclick="pushdata()"></div>
                    </div>`;
    if (howmuch == 0) {
        alert("您的購物車已無商品");
        let a = document.getElementsByClassName("gobackgoback");
        a.style.display = block;
    }

}
/*<div>取消數：<input type="text" name="" value="${howmuchcancel}" id="" disabled="disabled"></div>*/


var pushdata = function () {

    var title = $('#commodityname').val() || '未填寫'; //商品名

    // 電子郵件
    var howmuch = $('name=["much"]').val() || '未填寫';

    //var howmuch = $('.much').val() || '未填寫'; //商品數量

    var totalprice = $('#totalprice').val() || '未填寫'; //總金額

    var totalmuch = $('#totalmuch').val() || '未填寫'; //總商品數量

    // post
    var data = {
        'entry.1874703059': title,
        'entry.807229909': howmuch,
        'entry.617986349': totalprice,
        'entry.1181539638': totalmuch,
    };
    $.ajax({
        type: 'POST',
        url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeE6jkRIfUrXrUYoIw-fbC2uAkyoPETIfmm_dLUoG8e0_M20A/formResponse',
        data: data,
        contentType: 'application/json',
        dataType: 'jsonp',
        complete: function () {
            alert('資料已送出！');
        }
    });
};