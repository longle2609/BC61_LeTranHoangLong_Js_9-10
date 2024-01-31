function NhanVien () {
    this.taiKhoan = "";
    this.hoTen = "";
    this.email = "";
    this.matKhau = "";
    this.ngayLam = "";
    this.luongCoBan = 0;
    this.chucVu = "";
    this.gioLam = 0;

    this.tinhTongLuong = function() {
        if(this.chucVu === "Sếp") {
            return Number(this.luongCoBan) * 3;
        } else if(this.chucVu === "Trưởng phòng") {
            return Number(this.luongCoBan) * 2;
        }
        return Number(this.luongCoBan);
    }

    this.xepLoai = function () {
        if(Number(this.gioLam) >= 192) {
            return "Xuất sắc";
        } else if(Number(this.gioLam) >= 176) {
            return "Giỏi";
        } else if(Number(this.gioLam) >= 160) {
            return "Khá";
        }
        return "Trung Bình";
    }
}