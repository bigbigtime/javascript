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
     * 获取 className 对象
     * @param {strong} node 
     */
    function getClassName(className){
        return document.getElementsByClassName(className);  // 数组
    }
    window.Azong.getClassName = getClassName;

    /**
     * 获取 标签 对象
     * @param {strong} node 
     */
    function getTagName(parentNode, target){
        return parentNode.getElementsByTagName(target);  // 数组
    }
    window.Azong.getTagName = getTagName;

    /**
     * 获取 标签 对象（第一层）
     * @param {strong} node 
     */
    function getChildren(parentNode){
        return parentNode.children;  // 数组
    }
    window.Azong.getChildren = getChildren;



    
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

    /**
     * addEventListener 方法
     */
    function addEvent(domNode, eventType, handlerFunction){
        if(window.addEventListener){
            domNode.addEventListener(eventType, handlerFunction);
        }else{
            domNode.attachEvent(`on${eventType}`, handlerFunction);
        }
    }
    window.Azong.addEvent = addEvent;

    /**
     * removeEventListener 方法
     */
    function removeEvent(domNode, eventType, handlerFunction){
        if(window.removeEventListener){
            domNode.removeEventListener(eventType, handlerFunction);
        }else{
            domNode.detachEvent(`on${eventType}`, handlerFunction);
        }
    }
    window.Azong.removeEvent = removeEvent;

    /**
     * 添加子节点到父级末尾
     */
    function addChild(parentNode, node){
        parentNode.appendChild(node); // 对象末尾添加
    }
    window.Azong.addChild = addChild;

})()

// window 全局

// 作用域：在作用域外部是无法访问作用域内部的一些方法和变量

// 自动执行函数，第1：防止变量和方法，不会对全局环境造成污染；第2：防止与第三库命名冲突