(function(){
    "use strict";  // 严格模式
    // 命名空间
    if(!window.UI) { window.UI = {}; }

    const messageConfig = {
        duration: 3000
    }

    /**
     * message
     */
    function $message(params){
        const body = document.getElementsByTagName('body')[0];
        const messageDom = window.Azong.createEl('div', {
            id: "alert-ui"
        })
        if(params.html) {
            messageDom.innerHTML = params.message;
        }else{
            messageDom.innerText = params.message;
        }
        // 时间配置
        if(params.duration) { messageConfig.duration = params.duration; }
        // 主题
        UI.theme(messageDom, params.type);
        // 添加至页面
        body.appendChild(messageDom);
        // 执行 show
        UI.show(messageDom);
    }
    window.UI.$message = $message;

    /**
     * 处理主题
     */
    function theme(node, type){
        if(!type) { return false; }
        node.classList.add(`mesagee-theme-${type}`);
    }
    window.UI.theme = theme;

    /**
     * setTimeout、clearTimeout  -> 指定间隔时只执行一次
     * setInterval、clearInterval -> 指定间隔时间不断的执行，清除即停止
     */

     // 理解整体过程
     /**
      * 1、创建对象后设置属性，插入页面
      * 2、间隔时间添加样式，通过css3过滤产生动画
      * 3、多少秒后去除样式
      * 4、隐藏后，删除dom元素
      */
     /**
      * 
      */

    /**
     * show 对象
     */
    function show(node){
        node.timerShow = setTimeout(function(){
            node.classList.add("show");
            clearTimeout(node.timerShow);
        }, 10)
        // 隐藏对象
        UI.hide(node);
    }
    window.UI.show = show;
    
    /**
     * hide 对象
     */
    function hide(node){
        node.timerHide = setTimeout(function(){
            node.classList.remove("show");
            clearTimeout(node.timerHide);
            // remove 对象
            UI.remove(node);
        }, messageConfig.duration)
    }
    window.UI.hide = hide;


    /**
     * remove 对象
     */
    function remove(node){
        const body = document.getElementsByTagName('body')[0];
        node.timerRemove = setTimeout(function(){
            // 清除定时器
            clearTimeout(node.timerRemove);
            // remove 对象
            body.removeChild(node);
        }, 1000)
    }
    window.UI.remove = remove;
})()

// window 全局

// 作用域：在作用域外部是无法访问作用域内部的一些方法和变量

// 自动执行函数，第1：防止变量和方法，不会对全局环境造成污染；第2：防止与第三库命名冲突