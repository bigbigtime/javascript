(function(){
    "use strict";  // 严格模式
    // 命名空间
    if(!window.Azong) { window.Azong = {}; }

    /**
     * 获取ID的DOM元素，更有语义化
     * @param {string} id 
     */
    function $(id){
        if(typeof id != 'string'){ throw new Error('参数ID必须是一个字符串'); }
        const dom = document.getElementById(id);
        if(!dom){ throw new Error('dom对象未找到'); }
        return dom;
    }
    window.Azong.$ = $;

    /**
     * 创建元素
     */
    function createEl(node){
        return document.createElement(node);
    }
    window.Azong.createEl = createEl;

    /**
     * 设置节点属性
     */
    function setAttr(node, styles){
        for(let key in styles) {
            node.setAttribute(key, styles[key]);
            // 每次只能设置一个属性
        }
    }
    window.Azong.setAttr = setAttr;

    /**
     * 获取节点属性
     */
    function getAttr(node, attr){
        return node.getAttribute(attr);
    }
    window.Azong.getAttr = getAttr;

})()

// window 全局

// 作用域：在作用域外部是无法访问作用域内部的一些方法和变量

// 自动执行函数，第1：防止变量和方法，不会对全局环境造成污染；第2：防止与第三库命名冲突