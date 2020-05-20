"use strict";  // 严格模式
// 获取 DIV
const divDom = window.Azong.$('container-wrap');  // 获取元素
// 固定语法
const tableDom = window.Azong.createEl('table');  // 创建元素
// 获取添加信息按钮对象
const addInfoButton = window.Azong.getClassName('add-info-button')[0];
// 获取form 弹窗对象
const infoDialog = window.Azong.$('info-dialog');
// 获取 form 弹窗关闭按钮对象
const closeDialog = document.querySelector('.close-dialog');
// 获取头像区域
const faceView = window.Azong.getClassName('face-view')[0];
// 获取头像列表区域
const faceViewList = document.querySelector('.face-view-list');



window.Azong.setAttr(tableDom, {
    'border': '0',
    'cellpadding': '0',
    'cellspacing': '0',
    'id': 'table-data-wrap',
    'width': '100%'
});

/**
 * 表头数据
 */
let theadHtml = `<thead><tr>`;
// es6 forEach
tableTheadData.forEach((item) => {
    // 检测是否有width
    let width = item.width ? ` width="${item.width}"` : '';
    // 检测是否有id
    let id = item.id ? ` id="${item.id}"` : '';
    // 字符串拼接
    theadHtml += `<th${width}${id}>${item.label}</th>`;
})
theadHtml += `</tr></thead>`;
/**
 * 列表数据
 */
let tbodyHtml = `<tbody>`;
tbodyHtml += `${createTbodyData()}</tbody>`;
// 生成table的内容
tableDom.innerHTML = theadHtml + tbodyHtml;
// 添加到页面
divDom.appendChild(tableDom);

/**
 * ****** 添加信息层显示/隐藏 **********************************************************************************
 */
// 打开
window.Azong.addEvent(addInfoButton, 'click', function(){
    infoDialog.classList.add('dialog-show');
});
// 关闭
window.Azong.addEvent(closeDialog, 'click', function(){
    infoDialog.classList.remove('dialog-show');
});

/**
 * ****** 头像事件处理 **********************************************************************************
 */
window.Azong.addEvent(faceView, 'click', function(){
    handlerFaceList();
});
window.Azong.addEvent(faceViewList, 'click', function(e){
    // 获取标签
    let nodeName = e.target.nodeName.toLowerCase();
    // 获取img对象
    const getImg = window.Azong.getTagName(faceView, 'img');  // 数组
    // 创建img对象
    const createImg = window.Azong.createEl('img');
    // 点击获取src
    let getSrc = ``;
    // 更新src
    if(nodeName === 'li') {
        const img = window.Azong.getChildren(e.target)[0];
        getSrc = img.src;
    }
    if(nodeName === 'img') { 
        getSrc = e.target.src;
    }
    // 头像存在，则修改头像的src
    if(getImg.length !== 0) {
        getImg[0].src = getSrc;
    }else{
        // img写入src
        createImg.src = getSrc;
        window.Azong.addChild(faceView, createImg);
    }
});

function handlerFaceListCallback(data){
    const requestData = data.data;
    // for of
    let liHtml = ``;
    for(let key of requestData) {
        liHtml += `<li><img src="${key}" alt=""></li>`
    }
    faceViewList.innerHTML = liHtml;
}

