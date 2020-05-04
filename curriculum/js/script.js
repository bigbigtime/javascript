"use strict";  // 严格模式
// 获取 DIV
const divDom = window.Azong.$('container-wrap');  // 获取元素
// 固定语法
const tableDom = window.Azong.createEl('table');  // 获取元素

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