
### 1.	Download source code
![cau1](/public/1.png)

### 2.	Run npm install
## EProject -Phase-1
![cau2](/public/2.png)

- cd api-gateway->npm install
![cau2](/public/apigateway.png)
 
- cd..-> cd auth->npm install
![cau2](/public/2_auth.png)
 
- cd..->cd order->npm install
![cau2](/public/2_order.png)
 
- cd..->cd product->npm install
![cau2](/public/2_product.png)
 
-	Thêm dữ liệu cho file .env:

+ auth
•	MONGODB_AUTH_URI=mongodb://127.0.0.1:27017/authdb
•	JWT_SECRET=
JWT_SECRET có được khi Chạy câu lệnh: 
 node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"  để lấy được chuỗi ngẫu nhiên (random string) trong Node.js

+ order: 
•	MONGODB_AUTH_URI=mongodb://127.0.0.1:27017/authdb
•	JWT_SECRET=
/// Lấy từ auth xuống

•	MONGODB_PRODUCT_URI=mongodb://127.0.0.1:27017/productdb

•	MONGODB_ORDER_URI=mongodb://127.0.0.1:27017/orderdb

+ product:
•	MONGODB_AUTH_URI=mongodb://127.0.0.1:27017/authdb
•	JWT_SECRET=
/// Lấy từ auth xuống

•	MONGODB_PRODUCT_URI=mongodb://127.0.0.1:27017/productdb

### 3.	Setup all microservices
-	Auth
npm start
![kqua1](/public/3_auth.png)

-	Product
npm start
![kqua2](/public/3_product.png)
![kqua2mongo](/public/productdb.png)

 
-	Order
npm start

	

### 4.	Test all business logic with POSTMAN
### Auth:
- register
![register](/public/register_auth.png)
![registermongo](/public/register_mongo.png)
 
- Login
![login](/public/login_auth.png)


Chọn Headers->key:x-auth-token->value là giá trị của token có được từ login
Sử dụng GET để có thể thực hiện được cái dashboard
- dashboard
![dashboard](/public/dashboard.png)
### product:
- GET
![getsapham](/public/getproduct.png)

- POST
![postsapham](/public/postproduct.png)

![postmongoo](/public/post_mongo.png)
 
- KIỂM TRA LẠI
![kiemtra](/public/kiemtralai.png)
 
### order

5.	Commit to onwer repository named: StudentID-Fullname-EProject (example: 2231213-NguyenVanAn-EProject). 
•	Don’t commit: .env, node_modules and .DS_Store
•	Create README to describe project
