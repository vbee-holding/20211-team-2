import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
        <body>
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
                            <a class="nav-link text-light" href="/">
                              <span class="icon"><i class="fa fa-file-text " aria-hidden="true"></i>  </span>
                              Quản lý chuyên mục
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" href="/news">
                              <span class="icon"><i class="fa fa-newspaper-o" aria-hidden="true"></i>  </span>
                              Các bài báo
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" href="crawl">
                              <span class="icon"><i class="fa fa-database" aria-hidden="true"></i>  </span>
                              Crawl 
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" href="/users">
                              <span class="icon"><i class="fa fa-user-circle-o" aria-hidden="true"></i>  </span>
                              Người đăng ký
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" href="/static">
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