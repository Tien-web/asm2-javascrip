/*Xuất ra danh sách N số nguyên tố nhỏ nhất
 Input: N
 Output: Danh sách N số nguyên tố
*/
function layDanhSachNSoNguyenToNhoNhat(n) {
    var danhSachNSoNguyenToNhoNhat = new Array(1, 2, 3, 5, 7, 11);
    //thực hiện hàm
      
      var soHienTai = 1;

      /*tăng số hiện tại từ 0, mỗi lần tăng lên thêm 1 đơn vị. Cho tới khi tìm ra đủ số lượng số nguyên tố là N soHienTai = 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
      N = 5:
      Kiểm tra (soHienTai có phải số nguyên tố không)
      */
      while (danhSachNSoNguyenToNhoNhat.length < n) {
          if(laSoNguyenTo(soHienTai) == true) {
              danhSachNSoNguyenToNhoNhat[]
          }

      }
    return danhSachNSoNguyenToNhoNhat;
} 

function laSoNguyenTo(number){
    //TODO: Nếu là số nguyên tố thì return true; nếu không return true false
    return false;
}