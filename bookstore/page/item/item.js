import api from "./../../api/api.js"

function generate_book(book){
    var book_template = '\
        <div class="name"><span class="tag">有间自营</span>{{name}}</div>\
        <div class="description">{{description}}</div>\
        <div class="author">{{author}}</div>\
        <div class="price-wrapper">\
            <div class="hint">现价</div>\
            <div class="price-a">{{price_b}}</div>\
            <div class="hint">定价<span class="price-b">{{price_a}}</span></div>\
        </div>\
        '

    book_template = book_template.replace('{{name}}', book.name)
    book_template = book_template.replace('{{author}}', book.author)
    book_template = book_template.replace('{{description}}', book.description)
    book_template = book_template.replace('{{price_a}}', book.price_a.toFixed('2'))
    book_template = book_template.replace('{{price_b}}', book.price_b.toFixed('2'))

    document.getElementsByClassName('cover')[0].style.backgroundImage="url("+book.img+")"
    document.getElementById('book').innerHTML=book_template
}

async function generate_page(id, user){
    //book
    var data = await api.get_item(id)
    if(data['code']==200){
        var book = data['data']
        generate_book(book)
    }else{
        alert("找不到书籍")
    }
    //header-login state
    if(user){
        document.getElementsByClassName('not-login')[0].style.display="none"
        document.getElementById("username").innerHTML=user.name
    }
}

async function add_cart(id, user){
    if(user){
        var data = await api.add_cart({
            'book_id': id,
            'user_id': user.id,
            'number': document.getElementsByTagName('input')[0].value
        })
        if(data['code']==200){
            alert('成功添加至购物车')
        }else{
            alert('添加购物车失败')
        }
    }else{
        alert('请先登录')
        goto('login')
    }
}

function init_btn(id, user){
    document.getElementsByClassName('btn')[0].onclick=()=>{
        add_cart(id, user)
    }
}

function onload(){
    var id = getUrlParam('id')
    var user = JSON.parse(localStorage.getItem('user'))
    generate_page(id, user)
    init_btn(id, user)
}

onload()