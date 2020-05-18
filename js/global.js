let baseUrl = "http://www.web-jshtml.cn/api/javascriptApi";
function handAddEvent(event, handFun){
  if (window.addEventListener) {  
      window.addEventListener(event, handFun, false);
  } else if (window.attachEvent)  {
      window.attachEvent('on' + event, handFun);  //IE
  }
}
/**
 * 登录
 */
function login(param){
  $.post(
      `${baseUrl}/login/`,
      JSON.stringify(param),
      function(data){
        loginCallback(data)
  }, "json");
}

/**
 * 注册
 */
function register(param){
  $.post(
      `${baseUrl}/register/`,
      JSON.stringify(param),
      function(data){
        registerCallback(data)
  }, "json");
}

function getProvicne(){
  let param = {id:10};
  $.post(
    `${baseUrl}/cityPicker/`,
      param,
      function(data){
  }, "json");
}

/**
 * 获取验证码
 */
function handlerGetCode(value){
  $.post(
    `${baseUrl}/getSms/`,
    JSON.stringify({
      username: value,
      module: 'register'
    }),
    function(data){
      handlerGetCodeCallback(data);
    }, "json");
}

handAddEvent('load', function(){
  let scriptSha1 = document.createElement('script');
  let scriptDefault = document.createElement('script');
  let scriptJquery = document.createElement('script');
  let codeButton = document.getElementById('codeButton');
  scriptSha1.src = 'http://www.web-jshtml.cn/curriculum/javascript/js/sha1.js';
  scriptDefault.src = 'http://www.web-jshtml.cn/curriculum/javascript/js/script.js';
  scriptJquery.src = 'http://www.web-jshtml.cn/curriculum/javascript/js/jquery1.11.3.min.js';

  // 追加
  document.getElementsByTagName('head')[0].appendChild(scriptSha1);
  document.getElementsByTagName('body')[0].appendChild(scriptDefault);
  document.getElementsByTagName('body')[0].appendChild(scriptJquery);

  //
  const html = `<div class="code-pop">
                  <img src="http://www.web-jshtml.cn/file/main/gzh.jpg" width="100%" alt="手把手撸码前端公众号">
                  扫码获取验证码
              </div>`;
  // 写入验证码
  if(codeButton) {
    codeButton.innerHTML = `${codeButton.innerHTML}${html}`;
  }
  
})