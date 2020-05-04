let email = document.getElementById('email');
let password = document.getElementById('password');
let passwords = document.getElementById('passwords');
let code = document.getElementById('code');
let codeButton = document.getElementById('codeButton');
/**
 * 正则
 */
let regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/; 
let regPassword = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
let regPattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；：”“'。，、？]")

function registerFrom(){
    // 邮箱
    if(!email.value) { alert("邮箱不能为空"); return false; }
    if(!regEmail.test(email.value)) { alert("邮箱格式不正确"); return false; }
    // 密码
    if(!password.value) { alert("密码不能为空"); return false; }
    if(regPattern.test(password.value)) {
        alert("密码存在特殊字符，请重新输入，不能存在空格！！"); return false;
    }
    if(!passwords.value) { alert("重复密码不能为空"); return false; }
    if(password.value != passwords.value) { alert("重复密码不致，请重新输入"); return false; }
    if(!code.value) { alert("验证码不能为空"); return false; }
    register(
        {
            username: email.value,
            password: sha1(password.value),
            code: code.value
        }
    )
    return false;
}
function registerCallback(data){
    if(data.resCode !== 0) {
        alert(data.message);
        return false;
    }
    if(data.resCode === 0) {
        alert(data.message);
        window.location.href = "login.html";
        return false;
    }
}
function loginFrom(){
    // 邮箱
    if(!email.value) { alert("邮箱不能为空"); return false; }
    if(!regEmail.test(email.value)) { alert("邮箱格式不正确"); return false; }
    // 密码
    if(!password.value) { alert("密码不能为空"); return false; }
    // 验证码
    if(!code.value) { alert("验证码不能为空"); return false; }
    login(
        {
            username: email.value,
            password: sha1(password.value),
            code: code.value
        }
    )
    return false;
}
function loginCallback(data){
    if(data.resCode !== 0) {
        alert(data.message);
        return false;
    }
    if(data.resCode === 0) {
        document.cookie = 'admin_toKen =' + data.data.token; 
        document.cookie = 'username =' + data.data.username; 
        alert(data.message);
        window.location.href = "curriculum/index.html";
        return false;
    }
}
/**
 * 获取验证码
 */
let disabledFlag = false;
function getCode(){
    let codePop = document.querySelector('.code-pop');
    let email = document.getElementById('email');
    if(!email.value) {
        alert("请输入邮箱");
        return false
    }
    codePop.style.display = disabledFlag === false ? "block" : "none";
    disabledFlag = !disabledFlag
}