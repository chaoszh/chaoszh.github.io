import api from "./../../api/api.js"

function generate_a_book(book) {
    var book_template = '\
            <div class="book" onclick=\"goto(\'item\', {\'id\': {{id}}})\">\
                <div class="cover" style="background-image: url({{url}});"></div>\
                <div class="title">{{title}}</div>\
                <div class="author">{{author}}</div>\
                <div class="price-rect">\
                    <span class="after price">{{after_price}}</span>\
                    <span class="before price">{{before_price}}</span>\
                </div>\
            </div>'
    book_template = book_template.replace('{{id}}', book.id)
    book_template = book_template.replace('{{title}}', book.name)
    book_template = book_template.replace('{{author}}', book.author)
    book_template = book_template.replace('{{after_price}}', book.price_b.toFixed('2'))
    book_template = book_template.replace('{{before_price}}', book.price_a.toFixed('2'))
    book_template = book_template.replace('{{url}}', book.img)

    document.getElementById(book.book_class).innerHTML += book_template
}

function generate_books(){
    var book_classes=['jiaoyu','xiaoshuo','wenyi','renwen','tongshu']

    book_classes.forEach(async(c) => {
        var data = await api.get_items(c)
        if(data['code']==200){
            var books = data['data'].slice(0,6)
            books.forEach(book => {
                generate_a_book(book)
            })
        }
    });
}

function login_detect(){

    var user = localStorage.getItem('user')
    if(user==null){
        let logins = document.getElementsByClassName("login")
        for(let i=0;i<logins.length; i++){
            logins[i].style.display='none'
        }
    }
    else{
        user=JSON.parse(user)
        let logouts = document.getElementsByClassName("logout")
        for(let i=0;i<logouts.length; i++){
            logouts[i].style.display='none'
        }
    }
}

function onload(){
    login_detect()
    generate_books()
}

onload()