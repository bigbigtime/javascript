function handAddEvent(event, handFun){
  if (window.addEventListener) {  
      window.addEventListener(event, handFun, false);
  } else if (window.attachEvent)  {
      window.attachEvent('on' + event, handFun);  //IE
  }
}
function getCookie(cookie_name) {
  var allcookies = document.cookie;
  //索引长度，开始索引的位置
  var cookie_pos = allcookies.indexOf(cookie_name);
  // 如果找到了索引，就代表cookie存在,否则不存在
  if (cookie_pos != -1) {
      // 把cookie_pos放在值的开始，只要给值加1即可
      //计算取cookie值得开始索引，加的1为“=”
      cookie_pos = cookie_pos + cookie_name.length + 1; 
      //计算取cookie值得结束索引
      var cookie_end = allcookies.indexOf(";", cookie_pos);
      if (cookie_end == -1) {
          cookie_end = allcookies.length;
      }
      //得到想要的cookie的值
      var value = unescape(allcookies.substring(cookie_pos, cookie_end)); 
  }
  return value;
}
/**
 * 检测token
 */
function checkToken(){
    let toKen = getCookie('admin_toKen');
    let username = getCookie('username');
    if(!toKen || !username) {
        alert('未检测到token，请重新登录');
        window.location.href = "../login.html";
    }
}
checkToken();

handAddEvent('load', function(){
  let scriptJquery = document.createElement('script');
  scriptJquery.src = 'http://www.web-jshtml.cn/curriculum/javascript/js/jquery1.11.3.min.js';
  // 追加
  document.getElementsByTagName('body')[0].appendChild(scriptJquery);
  
})
let linkStyle = document.createElement('link');
linkStyle.rel = 'stylesheet';
linkStyle.href = 'http://www.web-jshtml.cn/curriculum/javascript/css/base.css';
document.getElementsByTagName('head')[0].appendChild(linkStyle);