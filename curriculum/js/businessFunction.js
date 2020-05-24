"use strict";  // 严格模式
/*********************************************************************************************
 * *** 头像逻辑 **********************************************************************
 * ********************/
/**
 * API 获取头像的回调函数
 * @param {*} data 
 */
function handlerFaceListCallback(data){
    const requestData = data.data;
    // for of
    let liHtml = ``;
    for(let key of requestData) {
        liHtml += `<li><img src="${key}" alt=""></li>`
    }
    faceViewList.innerHTML = liHtml;
}
/**
 * 更新头像函数
 */
function faceUpdate(params){
    if(params.type === "add") {
        // 头像存在，则修改头像的src
        if(params.getImg.length !== 0) {
            params.getImg[0].src = params.getSrc;
        }else{
            // img写入src
            params.createImg.src = params.getSrc;
            window.Azong.addChild(faceView, params.createImg);
        }
    }
    if(params.type === "del" && params.getImg) {
        // 删除某个父级下面的子对象（DOM元素）
        faceView.removeChild(params.getImg);
    }
}
