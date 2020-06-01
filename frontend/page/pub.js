//window href jumping
function goto(path, params=null){
    if(path==0){
        location.reload()
        return
    }else if(path==-1){
        window.history.back(-1)
        return
    }

    let current_p=window.location.href;
    let split_p=current_p.split('/');
    split_p=split_p.slice(0,-2);
    split_p.push(path);
    split_p.push(path+'.html');
    let later_p=split_p.join('/');
    if(params){
        later_p+='?'
        Object.keys(params).forEach(k => {
            later_p += (k+'='+params[k])
        });
    }
    console.log(later_p)
    window.location.href=later_p;
}

function getUrlParam(key)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == key){return pair[1];}
    }
    return(false);
}

function logout(){
    localStorage.removeItem('user')
    location.reload()
}