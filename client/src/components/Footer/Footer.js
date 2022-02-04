import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div id="bottom-bar">
        <div class="align">
          <div>
            <a href="/" className="logo-bottom"></a>
          </div>
          <div>
            <form action="" className="form">
              <input
                type="text"
                placeholder="Nhập nội dung tìm kiếm"
                className="search-input"
              />
              <input type="button" value="Tìm kiếm" className="search-button" />
            </form>
          </div>
        </div>
      </div>
      <div id="reference">
        <div class="align">
          <div className="left-ref">
            <ul>
              <h4>Liên hệ</h4>
              <li>
                <a href="#">Giới thiệu</a>
              </li>
              <li>
                <a href="#">Điều khoản sử dụng</a>
              </li>
              <li>
                <a href="#">Quảng cáo</a>
              </li>
            </ul>
            <ul>
              <h4>Khác</h4>
              <li>
                <a href="#">Tổng hợp</a>
              </li>
            </ul>
          </div>
          <div className="right-ref">
            <p>
              Giấy phép số 1818/GP-TTĐT do Sở Thông tin và Truyền thông Hà Nội cấp
              ngày 05/05/2017
              <br />
              Đơn vị chủ quản: Công ty Cổ phần Công nghệ EPI * Chịu trách nhiệm:
              Võ Quang
              <br />
              Địa chỉ: Tầng 5, Tòa nhà Báo Sinh Viên VN, D29 Phạm Văn Bạch, Yên
              Hòa, Cầu Giấy, Hà Nội
              <br />
              Tel: (024) 3-212-3232, số máy lẻ 6666. contact.baomoi@epi.com.vn
            </p>
            <p>
              BÁO MỚI tổng hợp và sắp xếp các thông tin tự động
              <br />
              bởi chương trình máy tính
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
