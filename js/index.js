var nhanVienArr = [];
window.addEventListener("load", function () {
    if (localStorage.getItem("nhanVienArr")) {
        nhanVienArr = JSON.parse(localStorage.getItem("nhanVienArr"));
        renderTable(nhanVienArr);
    }
})
document.querySelector("#btnThemNV").onclick = function () {
    var nhanVien = new NhanVien();
    var valid = true;
    nhanVien.taiKhoan = document.querySelector("#tknv").value.trim();
    nhanVien.hoTen = document.querySelector("#name").value.trim();
    nhanVien.email = document.querySelector("#email").value.trim();
    nhanVien.matKhau = document.querySelector("#password").value.trim();
    nhanVien.ngayLam = document.querySelector("#datepicker").value.trim();
    nhanVien.luongCoBan = document.querySelector("#luongCB").value.trim();
    nhanVien.chucVu = document.querySelector("#chucVu").value;
    nhanVien.gioLam = document.querySelector("#gioLam").value.trim();

    valid &= checkEmpty(nhanVien.taiKhoan, "#tbTKNV", "Tài khoản") & checkEmpty(nhanVien.hoTen, "#tbTen", "Họ và tên") & checkEmpty(nhanVien.email, "#tbEmail", "Email") & checkEmpty(nhanVien.matKhau, "#tbMatKhau", "Mật khẩu") & checkEmpty(nhanVien.luongCoBan, "#tbLuongCB", "Lương cơ bản") & checkEmpty(nhanVien.gioLam, "#tbGiolam", "Giờ làm") & checkEmpty(nhanVien.ngayLam, "#tbNgay", "Ngày làm") & checkTaiKhoan(nhanVien.taiKhoan, "#tbTKNV", "Tài khoản") & checkHoTen(nhanVien.hoTen, "#tbTen", "Họ và tên") & checkEmail(nhanVien.email, "#tbEmail", "Email") & checkPassword(nhanVien.matKhau, "#tbMatKhau", "Mật khẩu") & checkSalary(nhanVien.luongCoBan, "#tbLuongCB", "Lương cơ bản") & checkChucVu(nhanVien.chucVu, "#tbChucVu", "Chức vụ") & checkGioLam(nhanVien.gioLam, "#tbGiolam", "Giờ làm") & checkDate(nhanVien.ngayLam, "#tbNgay", "Ngày làm") & checkTaiKhoanExist(nhanVien.taiKhoan, nhanVienArr, "#tbTKNV");

    if (!valid) {
        return;
    }
    nhanVienArr.push(nhanVien);
    renderTable(nhanVienArr);
    localStorage.setItem("nhanVienArr", JSON.stringify(nhanVienArr));
}

document.querySelector("#btnCapNhat").onclick = function () {
    var nhanVienIndex = nhanVienArr.findIndex(function (element) {
        return element.taiKhoan === document.querySelector("#tknv").value.trim();
    })

    var nhanVien = new NhanVien();
    var valid = true;
    nhanVien.taiKhoan = document.querySelector("#tknv").value.trim();
    nhanVien.hoTen = document.querySelector("#name").value.trim();
    nhanVien.email = document.querySelector("#email").value.trim();
    nhanVien.matKhau = document.querySelector("#password").value.trim();
    nhanVien.ngayLam = document.querySelector("#datepicker").value.trim();
    nhanVien.luongCoBan = document.querySelector("#luongCB").value.trim();
    nhanVien.chucVu = document.querySelector("#chucVu").value;
    nhanVien.gioLam = document.querySelector("#gioLam").value.trim();

    valid &= checkEmpty(nhanVien.hoTen, "#tbTen", "Họ và tên") & checkEmpty(nhanVien.email, "#tbEmail", "Email") & checkEmpty(nhanVien.matKhau, "#tbMatKhau", "Mật khẩu") & checkEmpty(nhanVien.luongCoBan, "#tbLuongCB", "Lương cơ bản") & checkEmpty(nhanVien.gioLam, "#tbGiolam", "Giờ làm") & checkHoTen(nhanVien.hoTen, "#tbTen", "Họ và tên") & checkEmail(nhanVien.email, "#tbEmail", "Email") & checkPassword(nhanVien.matKhau, "#tbMatKhau", "Mật khẩu") & checkSalary(nhanVien.luongCoBan, "#tbLuongCB", "Lương cơ bản") & checkChucVu(nhanVien.chucVu, "#tbChucVu", "Chức vụ") & checkGioLam(nhanVien.gioLam, "#tbGiolam", "Giờ làm") & checkEmpty(nhanVien.ngayLam, "#tbNgay", "Ngày làm") & checkDate(nhanVien.ngayLam, "#tbNgay", "Ngày làm");

    if (!valid) {
        return;
    }

    nhanVienArr[nhanVienIndex] = nhanVien;
    renderTable(nhanVienArr);
    localStorage.setItem("nhanVienArr", JSON.stringify(nhanVienArr));
    document.querySelector("#searchName").value = "Chọn loại nhân viên";
}

document.querySelector("#searchName").onchange = function () {
    var condition = document.querySelector("#searchName").value;
    var filterArr = filterLoaiNhanVien(nhanVienArr, condition);
    renderTable(filterArr);
    if (condition === "Chọn loại nhân viên") {
        renderTable(nhanVienArr);
    }
}

document.querySelector("#btnThem").onclick = function () {
    document.querySelector("#tknv").readOnly = false;
    document.querySelector("#tknv").value = "";
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#datepicker").value = "";
    document.querySelector("#luongCB").value = "";
    document.querySelector("#chucVu").value = "Chọn chức vụ";
    document.querySelector("#gioLam").value = "";
    document.querySelector("#tbTKNV").style.display = "none";
    document.querySelector("#tbTen").style.display = "none";
    document.querySelector("#tbEmail").style.display = "none";
    document.querySelector("#tbMatKhau").style.display = "none";
    document.querySelector("#tbNgay").style.display = "none";
    document.querySelector("#tbLuongCB").style.display = "none";
    document.querySelector("#tbGiolam").style.display = "none";
    document.querySelector("#tbChucVu").style.display = "none";
}

document.querySelector("#btnReset").onclick = function () {
    document.querySelector("#tknv").readOnly = false;
    document.querySelector("#tknv").value = "";
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#datepicker").value = "";
    document.querySelector("#luongCB").value = "";
    document.querySelector("#chucVu").value = "Chọn chức vụ";
    document.querySelector("#gioLam").value = "";
    document.querySelector("#tbTKNV").style.display = "none";
    document.querySelector("#tbTen").style.display = "none";
    document.querySelector("#tbEmail").style.display = "none";
    document.querySelector("#tbMatKhau").style.display = "none";
    document.querySelector("#tbNgay").style.display = "none";
    document.querySelector("#tbLuongCB").style.display = "none";
    document.querySelector("#tbGiolam").style.display = "none";
    document.querySelector("#tbChucVu").style.display = "none";
}

function renderTable(nhanVienArr) {
    var htmlContent = "";
    for (var i = 0; i < nhanVienArr.length; i++) {
        var nhanVien = nhanVienArr[i];
        if (!nhanVien.hasOwnProperty("tinhTongLuong")) {
            nhanVien.tinhTongLuong = function () {
                if (this.chucVu === "Sếp") {
                    return Number(this.luongCoBan) * 3;
                } else if (this.chucVu === "Trưởng phòng") {
                    return Number(this.luongCoBan) * 2;
                }
                return Number(this.luongCoBan);
            }
        }
        if (!nhanVien.hasOwnProperty("xepLoai")) {
            nhanVien.xepLoai = function () {
                if (Number(this.gioLam) >= 192) {
                    return "Xuất sắc";
                } else if (Number(this.gioLam) >= 176) {
                    return "Giỏi";
                } else if (Number(this.gioLam) >= 160) {
                    return "Khá";
                }
                return "Trung Bình";
            }
        }
        htmlContent += `
            <tr>
                <td>${nhanVien.taiKhoan}</td>
                <td>${nhanVien.hoTen}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.ngayLam}</td>
                <td>${nhanVien.chucVu}</td>
                <td>${nhanVien.tinhTongLuong().toLocaleString()}</td>
                <td>${nhanVien.xepLoai()}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteWithCode('${nhanVien.taiKhoan}')">Delete</button>
                    <button class="btn btn-primary" data-toggle="modal" data-target="#myModal" onclick="editWithCode('${nhanVien.taiKhoan}')">Edit</button>
                </td>
            </tr>
        `;
    }
    document.querySelector("#tableDanhSach").innerHTML = htmlContent;
}

function deleteWithCode(taiKhoan) {
    for (var i = 0; i < nhanVienArr.length; i++) {
        if (taiKhoan === nhanVienArr[i].taiKhoan) {
            nhanVienArr.splice(i, 1);
            break;
        }
    }
    renderTable(nhanVienArr);
    localStorage.setItem("nhanVienArr", JSON.stringify(nhanVienArr));
}

function editWithCode(taiKhoan) {
    var nhanVien = nhanVienArr.find(function (element) {
        return element.taiKhoan === taiKhoan;
    })
    document.querySelector("#tknv").readOnly = true;
    document.querySelector("#tknv").value = nhanVien.taiKhoan;
    document.querySelector("#name").value = nhanVien.hoTen;
    document.querySelector("#email").value = nhanVien.email;
    document.querySelector("#password").value = nhanVien.matKhau;
    document.querySelector("#datepicker").value = nhanVien.ngayLam;
    document.querySelector("#luongCB").value = nhanVien.luongCoBan;
    document.querySelector("#chucVu").value = nhanVien.chucVu;
    document.querySelector("#gioLam").value = nhanVien.gioLam;
}

function filterLoaiNhanVien(nhanVienArr, condition) {
    var filterArr = nhanVienArr.filter(function (n) {
        return n.xepLoai() === condition;
    })
    return filterArr;
}