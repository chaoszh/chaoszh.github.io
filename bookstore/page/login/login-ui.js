// ui
function switch_panel(){
    if(document.getElementById('login-panel').style.display=='block'){
        document.getElementById('register-panel').style.display='block';
        document.getElementById('login-panel').style.display='none';
    }else{
        document.getElementById('login-panel').style.display='block';
        document.getElementById('register-panel').style.display='none';
    }
}