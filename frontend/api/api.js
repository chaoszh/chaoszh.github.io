import {ajax} from './ajax.js'

//user

async function login(data){
    return ajax('POST', '/user/login', data) 
}

async function register(data){
    return ajax('POST', '/user/register', data) 
}

async function logout(data){
    return ajax('POST', '/user/logout', data) 
}

//item

async function get_item(id){
    return ajax('GET', '/item/'+id, {}) 
}

async function get_items(book_class){
    return ajax('GET', '/item/class/'+book_class, {}) 
}

//cart

async function add_cart(data){
    //data={book_id+user_id+number}
    return ajax('POST', '/cart/add', data) 
}

async function remove_cart(data){
    //data={book_id+user_id}
    return ajax('POST', '/cart/remove', data) 
}

async function get_cart(id){
    return ajax('GET', '/cart/'+id, {}) 
}


//order

async function add_order(data){
    //data={user_id+books}
    return ajax('POST', '/order/add', data) 
}

async function remove_order(data){
    //data={id}
    return ajax('DELETE', '/order/remove', data) 
}

async function get_order(id){
    return ajax('GET', '/order/'+id, {}) 
}

export default{
    login,
    register,
    logout,
    get_item,
    get_items,
    add_cart,
    remove_cart,
    get_cart,
    add_order,
    remove_order,
    get_order,
}