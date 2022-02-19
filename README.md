# 20211 - team 2 - Final Project

Truy cập Database:
- Truy cập địa chỉ mongodb.com
- đăng nhập (đăng nhập bằng google nhé) 
- email: project20211.team2@gmail.com  
- password: project20211
- Ấn browse collection để mở database (collection giống kiểu table trong SQL server)

Để chạy server:
- Tạo file .env có nội dung như sau:
  ```
  MONGO_URI=mongodb+srv://project:20211@cluster0.bdcg1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
  HOST=<Địa chỉ IP máy của bạn>
  PORT=5000
  ```
- Chạy server bằng lệnh:
- ->cd server
- ->npm install
- ->npm start

Để chạy client:
- chỉnh sửa file src\config\Constants.js (đổi IP thành IP của máy hoặc thành localhost)
- ->cd to client
- ->npm install
- ->npm start

Slide: 
- https://husteduvn-my.sharepoint.com/:p:/g/personal/anh_pd183481_sis_hust_edu_vn/EY65uVw1u4tKjrHL1CojlSgBduJP_qYo-MG88EEvPYx7-A?e=dc5VKm
