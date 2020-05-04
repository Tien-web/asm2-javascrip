 /* Yêu cầu: Chuyển 1 đối tượng thành một đoạn HTML
                    input là đối tượng sanPham
                    output: đoạn HTML
        */
       function chuyenDoiTuongSanPhamThanhHTML(sanPham) {
        var html = '';
        //Chuyển đổi đối tượng thành HTML
        html = html + "<div class = 'san-pham'>";
        html = html +       "<div class = 'hinh-anh-san-pham'>";
        html = html +           "<img src = '" + sanPham.hinhAnh + "'>";           
        html = html +       "</div>"   
        html = html + "<h1 class = 'ten-san-pham'>" + sanPhamIphone5.ten + "</h1>";
        html = html + "<p class = 'gia-goc-san-pham'>"  + sanPhamIphone5.giaGoc + " VND</p>"; 
        html = html + "<p class = 'khu-vuc-san-pham'>"  + sanPhamIphone5.khuVuc + "</p";
        html = html + "</div>";
        return html;

    }

    /* Yêu cầu: Chuyển 1 danh sách đối tượng thành thẻ HTML
                input: Mảng chứa danh sách các sản phẩm 
                output: HTML -> hiển thị được danh sách sản phẩm 
    */
   function chuyenDanhSachSanPhamSangHTML(danhSachSanPham) {
        var htmlTong ='';
        /* HTML tổng bẳng nối các HTML con*/
        /* B1. Duyệt từng phần tử trong mảng */
        /* B2. Chuyển đối tượng thành HTML*/
        /* B3. Cộng HTML vào HTML tổng*/

        for (var i = 0; i < danhSachSanPham.length; i++) {
            /* Lấy từng phần tử; tại vị trí thứ i*/
            var sanPham = danhSachSanPham[i];
            var html = chuyenDoiTuongSanPhamThanhHTML(sanPham);
            htmlTong = htmlTong + html;

        }

        
        return htmlTong;

   }