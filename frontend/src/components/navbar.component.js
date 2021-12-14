import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
        <body>
        <header class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-2 shadow">
            <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Quản lý báo mới</a>
            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-nav">
                <div class="nav-item text-nowrap">
                    <a class="nav-link px-3" href="/admin/logout">Đăng xuất</a>
                </div>
            </div>
        </header>
    
        <div class="container-fluid">
            <div class="row">
                <nav id="sidebarMenu " class="start-0 col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
                    <div class="position-fixed start-0 pt-3 col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse vh-100 ">
                        <ul class="nav flex-column ">
                          <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/admin">
                              <span class="icon"><i class="fa fa-home" aria-hidden="true"></i></span> Trang chủ
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#doanhso">
                              <span class="icon"><i class="fa fa-file-text" aria-hidden="true"></i>  </span>
                              Quản lý chuyên mục
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#lsu">
                              <span class="icon"><i class="fa fa-newspaper-o" aria-hidden="true"></i>  </span>
                              Các bài báo
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#lsu">
                              <span class="icon"><i class="fa fa-database" aria-hidden="true"></i>  </span>
                              Crawl 
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#xethue">
                              <span class="icon"><i class="fa fa-user-circle-o" aria-hidden="true"></i>  </span>
                              Người đăng ký
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#cacbaixe">
                              <span class="icon"><i class="fa fa-bar-chart" aria-hidden="true"></i>  </span>
                              Thống kê
                            </a>
                          </li>
                          
                        </ul>
                        </div>
                </nav>
            
            </div>
        </div>
        
    </body>
    );
  }
}