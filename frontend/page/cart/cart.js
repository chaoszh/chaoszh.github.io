import api from "./../../api/api.js"


function generate_a_book(book){
    let book_template='\
        <div class="item">\
            <div class="checkboxs">\
                <input class="item-checkbox" type="checkbox">\
            </div>\
            <img class="item-img" src="{{img}}"></img>\
            <div class="item-detail">\
                <div class="item-name">{{name}}</div>\
                <div class="item-author">{{author}}</div>\
            </div>\
            <div class="item-sin-val">{{price_b}}</div>\
            <div class="item-num">\
                <input type="number" class="item-number" value="{{number}}">\
            </div>\
            <div class="item-count">{{price_sum}}</div>\
            <div class="options">\
                <div class="delete-btn">×</div>\
            </div>\
        </div>\
        '
    
        book_template=book_template.replace("{{img}}", book.img)
        book_template=book_template.replace("{{name}}", book.name)
        book_template=book_template.replace("{{author}}", book.author)
        book_template=book_template.replace("{{price_b}}", book.price_b.toFixed(2))
        book_template=book_template.replace("{{number}}", book.number)
        book_template=book_template.replace("{{price_sum}}", (book.number*book.price_b).toFixed(2))

        document.getElementsByClassName('items')[0].innerHTML+=book_template
}

function generate_cart(books){
    books.forEach(book => {
        generate_a_book(book)
    });
}

function count_money(){
    var checkboxs = document.getElementsByClassName('item-checkbox')
    var item_count = document.getElementsByClassName('item-count')
    var money = document.getElementsByClassName('money')[0]
    var sum = 0
    for(let i=1;i<checkboxs.length;i++){
        if(checkboxs[i].checked){
            sum+=parseFloat(item_count[i-1].innerHTML)
        }
    }
    money.innerHTML = sum.toFixed(2)
    return
}

function init_btn(user, cart){
    let len = cart.length
    //checkboxs
    let checkboxs = document.getElementsByClassName('item-checkbox')
    for(let i=1;i<=len;i++){
        checkboxs[i].onchange=()=>{
            count_money()
        }
    }
    checkboxs[0].onchange=()=>{
        for(let i=1;i<=len;i++){
            checkboxs[i].checked=checkboxs[0].checked;
            checkboxs[i].onchange()
        }
    }
    //numbers
    let numbers = document.getElementsByClassName('item-number')
    let sin_vals = document.getElementsByClassName('item-sin-val')
    let counts = document.getElementsByClassName('item-count')
    for(let i=0;i<len;i++){
        numbers[i].onchange=()=>{
            let value = (parseFloat(sin_vals[i].innerHTML)*parseFloat(numbers[i].value)).toFixed(2)
            counts[i].innerHTML=value
            count_money()
        }
    }
    //make-order-btn
    let mk_order_btn = document.getElementsByClassName('make-order-btn')[0]
    mk_order_btn.onclick=async()=>{
        let books=[]
        for(let i=1;i<checkboxs.length;i++){
            if(checkboxs[i].checked){
                books.push({
                    'book_id': cart[i-1].id,
                    'number': numbers[i-1].value
                })
            }
        }
        let data = await api.add_order({
            'user_id': user.id,
            'books': books
        })
        if(data['code']==200){
            await books.forEach(async(b) => {
                await api.remove_cart({
                        'user_id': user.id,
                        'book_id': b.book_id
                    })
            });
            alert("下单成功！")
            goto(0)
        }else{
            alert("下单失败，请重试")
        }
    }
}

async function generate_page(user){
    //header-login state
    if(user){
        document.getElementsByClassName('not-login')[0].style.display="none"
        document.getElementById("username").innerHTML=user.name
    }else{
        return
    }
    //cart
    let data = await api.get_cart(user.id)
    let books = null
    if(data['code']==200){
        books = data['data']
        if(books.length>0){
            document.getElementById('empty').style.display='none'
            generate_cart(books)
        }
    }else{
        alert("查找购物车出错")
        return
    }
    //init btn
    init_btn(user, books)
}

function onload(){
    let user = JSON.parse(localStorage.getItem('user'))
    generate_page(user)
}

onload()