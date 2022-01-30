import React, { Component, useState, useEffect } from 'react';
import './static.css';
import axios from 'axios';

const Static = () => {
        return (
            <div className="container">
            <div className="py-4" >
              <h4 class = "text-success">Thống kê cho Báo mới</h4>
              <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="news text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Bản tin nhiều người xem nhất</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800"><em>Đang cập nhật</em></div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-map-marked-alt fa-2x text-gray-300"></i>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="news text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Chủ đề được quan tâm nhiều nhất</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800"><em>Đang cập nhật</em></div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-map-marked-alt fa-2x text-gray-300"></i>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="news text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Số lượng người đăng ký</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800"><em>30000</em></div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-map-marked-alt fa-2x text-gray-300"></i>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        )

 }
 export default Static;