"use strict";  // 严格模式

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
    // 请求接口
    handlerFaceList();
});
window.Azong.addEvent(faceViewList, 'click', function(e){
    const ev = e || window.event;
    // 获取标签
    let nodeName = ev.target.nodeName.toLowerCase();
    // 获取img对象
    const getImg = window.Azong.getTagName(faceView, 'img');  // 数组
    // 创建img对象
    const createImg = window.Azong.createEl('img');
    // 点击获取src
    let getSrc = ``;
    // 清除头像高光
    if(faceSave) { faceSave.classList.remove("active"); }  // 清除上一次对象的样工
    // 更新src
    if(nodeName === 'li') {
        const img = window.Azong.getChildren(ev.target)[0];
        getSrc = img.src;
        // 存储头像 li 标签
        faceSave = ev.target;
    }
    if(nodeName === 'img') { 
        getSrc = ev.target.src;
        faceSave = ev.target.parentNode;  // parentNode 父节点
    }
    faceSave.classList.add("active");
    // es6
    faceUpdate({ // 对象的 key 和 value 是相同的情况下，用一个参数就可以。
        type: "add",
        getImg,
        createImg,
        getSrc,
    });
});
window.Azong.addEvent(faceDelButton, 'click', function(e){
    const ev = e || window.event;
    // 获取img对象
    const getImg = window.Azong.getTagName(faceView, 'img')[0];  // 数组
    // 更新头像
    faceUpdate({
        type: "del",
        getImg
    });
    // 阻止事件冒泡
    if(ev.stopPropagation) {
        ev.stopPropagation();
    }else{
        ev.cancelBubble = true;
    }
})


/**
 * ****** 头像事件处理 **********************************************************************************
 */
inputUsername.onblur = function(){   // 谁绑定方法，this就指向谁
    // this
    let value = this.value;
    if(!value) {
        window.UI.$message({
            message: "姓名不能为空",
            type: "error"
        });
        // alert("姓名不能为空");
    }
}