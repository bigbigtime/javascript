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
// 获取删除头像按钮
const faceDelButton = window.Azong.getTagName(faceView, 'a')[0];