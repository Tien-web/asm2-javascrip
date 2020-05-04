<!DOCTYPE html>
<html lang="en">  

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Xây dựng một hàm để sinh ra đối tượng</title>
</head>

<body>
   <script>


       /*input: tên của sản phẩm; giá gốc; phần trăm giảm giá
         output: một object;*/
       function TaoRaDoiTuongSanPham(ten, giaGoc, phanTramGiamGia) {
           var sanPham = new Object();
           //TODO: tạo 1 object sản phẩm
           /*B1: Gán thuộc tính cho đối tượng*/
           sanPham.ten = ten;
           sanPham.giaGoc = giaGoc;
           sanPham.phanTramGiamGia = phanTramGiamGia;

           /*B2: Viết phương thức tính giá bán*/
           sanPham.tinhGiaBan = function() {
               var giaBan = this.giaGoc * (100 - this.phanTramGiamGia) / 100;
               return giaBan;
           }

           return sanPham;
       }

   </script>


</body>
</html>





