/* Tạo ra ID duy nhất*/
function taoId(){
    /*Lấy thời gian hiện tại theo milisecond: hiện tại  - 0:0:0 5/10/1970 -> milisecond*/
    var thoiGianHienTai = new Date().getTime();
    var id = Math.random().toString().substr(2, 10)+ '_'  +(thoiGianHienTai);
    return id;

}