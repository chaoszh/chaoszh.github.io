// 封装XmlHttpRequest
// refer to: https://blog.csdn.net/tinsine/article/details/90231546?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-2.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-2.nonecase

import {BASE_URL} from '../config.js'
// var BASE_URL = "http://localhost:5000"

function ajaxObject(option) {
    // option
	option.method = option.method ? option.method.toUpperCase() : 'GET';
	option.data = option.data || {};
    option.type = option.type || 'json';
    if(option.method == 'GET'){
        var formData = [];
        for(key in option.data) {
            formData.push(''.concat(key, '=', option.data[key]))
        }
        option.data = formData.join('&')
        if(option.method === 'GET' && formData.lenght > 0) {
            option.url += location.search.length === 0 ? ''.concat('?', option.data) : ''.concat('&', option.data); 
        }
    }
    // xhr
	var xhr = new XMLHttpRequest();
	xhr.responseType = option.type;
    xhr.withCredentials = false;
    return new Promise((resolve, reject)=>{
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    resolve(xhr.response)
                } else {
                    reject(xhr.response)
                }
            }
        }
        xhr.open(option.method, option.url, true);
        if (option.method === 'POST') {
          xhr.setRequestHeader('Content-Type', 'application/json')
        }
        xhr.send(option.method === 'POST' ? JSON.stringify(option.data) : null);
    })
}


async function ajax(method, url, data){
    try{
        console.log('[ajax]', method, url, data)
        var result = await ajaxObject({
            method: method,
            url: BASE_URL + url,
            data: data
        })
        console.log('[SUCCESS]', method, url, result)
        return result
    }catch(err){
        console.log('[ERROR]', method, url, err)
        return err
    }
}

window.ajax=ajax

export {
    ajax
}