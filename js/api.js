let baseApi = "http://www.web-jshtml.cn/api/javascriptApi";
/**
 * 获取头像
 */
function handlerFaceList(value){
  $.post(
    `${baseApi}/faceList/`,
    JSON.stringify({}),
    function(data){
      handlerFaceListCallback(data);
    }, "json");
}
function handlerFaceListCallback(data){
    return data;
}