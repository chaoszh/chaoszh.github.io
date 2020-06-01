import api from "./../../api/api.js"

async function login(name, passwd){
    var res = await api.login({
        'name': name,
        'passwd': passwd
    })
    if(res['code']==200){
        alert("登录成功")
        localStorage.setItem('user', JSON.stringify(res['data']))
        goto(-1)
    }
}

async function register(name, passwd){
    var res = await api.register({
        'name': name,
        'passwd': passwd
    })
    if(res['code']==200){
        alert("注册成功")
    }
}

function onload(){
    var inputs = document.getElementsByTagName('input')
    document.getElementsByClassName("login")[0].onclick=()=>{
        login(inputs[0].value, inputs[1].value)
    }
    document.getElementsByClassName("register")[0].onclick=()=>{
        register(inputs[2].value, inputs[3].value)
    }
}


onload()