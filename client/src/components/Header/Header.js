import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div id="search-bar">
        <div className="align">
          <a href="/" className="logo-top"></a>
          <form action="" className="form">
            <input
              type="text"
              placeholder="Nhập nội dung tìm kiếm"
              className="search-input"
            />
            <input type="button" value="Tìm kiếm" className="search-button" />
          </form>
          <a href="#" className="link gray-border">Join</a>
          <a href="#" className="link join-log-btn">Log in</a>
        </div>
      </div>
    </header>
  );
}
