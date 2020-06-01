import api from "./../../api/api.js"

function uuid(id){
    return 'xxxxxxxxxx'.replace(/[x]/g, function (c) {
		var r = Math.random() * 16 | 0,
			v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16).toUpperCase();
	});
}

function generate_order(order){
    let order_template = '\
        <div class="order">\
            <div class="order-title">订单编号</div>\
            <div class="order-id">{{id}}</div>\
            <div class="order-status">卖家已发货</div>\
            {{items}}\
            <div class="count">\
            <div>订单合计</div>\
            <div class="sum">{{sum}}</div>\
            </div>\
            </div>\
            '
    let item_template='\
            <div class="item">\
                <img class="item-img" src="{{img}}"></img>\
                <div class="item-detail">\
                    <div class="item-name">{{name}}</div>\
                    <div class="item-author">{{author}}</div>\
                </div>\
                <div class="item-sin-val">{{price_b}}</div>\
                <div class="item-num">{{number}}</div>\
                <div class="item-count">{{total_val}}</div>\
            </div>\
            '
    
    let items = []
    for(let i=0; i<order['books'].length; i++){
        let book = order['books'][i]
        let item_t = item_template
        item_t=item_t.replace("{{img}}", book.img)
            .replace("{{name}}", book.name)
            .replace("{{author}}", book.author)
            .replace("{{price_b}}", book.price_b.toFixed(2))
            .replace("{{number}}", book.number)
            .replace("{{total_val}}", (book.number*book.price_b).toFixed(2))
        items.push(item_t)
    }
    
    let order_t = order_template
    order_t=order_t.replace("{{id}}", uuid(order.order_id))
    .replace("{{items}}", items.join(''))
    .replace("{{sum}}", order.sum.toFixed(2))
    
    document.getElementsByClassName("orders")[0].innerHTML+=order_t
}

function generate_orders(orders){
    orders.forEach(order => {
        generate_order(order)
    });
}

async function generate_page(user){
    //order
    var data = await api.get_order(user.id)
    if(data['code']==200){
        var orders = data['data']
        if(orders.length>0){
            document.getElementById('empty').style.display='none'
            generate_orders(orders)
        }
    }else{
        alert("找不到历史订单")
    }
    //header-login state
    if(user){
        document.getElementsByClassName('not-login')[0].style.display="none"
        document.getElementById("username").innerHTML=user.name
    }
}

function onload(){
    var user = JSON.parse(localStorage.getItem('user'))
    generate_page(user)
}

onload()