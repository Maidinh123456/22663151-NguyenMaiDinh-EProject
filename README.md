### 1.	Download source code
### 2.	Run npm install
### 3.	Thêm dữ liệu
-	Thêm dữ liệu cho file .env của api-gateway, auth, product, order

-   Thêm dữ liệu cho Dockerfile của api-gateway, auth, product, order

-   Thêm dữ liệu cho file docker-compose.yml
<br>

### 4. Build docker
![Build docker](/public/build_docker.png)
![Kết quả](/public/kq_build_docker.png)

### 5.	Test all business logic with POSTMAN
### Auth:
- register
![register](/public/register.png)

- Login
![login](/public/login.png)


- Chọn Headers->key:x-auth-token->value là giá trị của token có được từ login

- Sử dụng GET để có thể thực hiện được cái dashboard

- dashboard
![dashboard](/public/dashboard.png)

### product:

- POST
![post_products](/public/postproducts.png)
 
- GET
![get_products](/public/getproducts.png)
 
-GET PRODUCT BY ID
![get_productsid](/public/getidproducts.png)

- BUY
![buy_product](/public/buy.png)


### 🔍 Kiểm tra dữ liệu trong MongoDB (Docker) sau khi thực hiện trên POSTMAN
Bạn có thể kiểm tra dữ liệu trong MongoDB container bằng lệnh:

<br>
docker exec -it mongodb mongosh
<br>
show dbs
<br>

- auth
<br>
use auth_db
<br>
show collections
<br>
db.users.find().pretty()
<br>

![ketqua_auth](/public/dl_auth.png)

- product
<br>
use product_db
<br>
show collections
<br>
db.products.find().pretty()
<br>

![ketqua_product](/public/dl_product.png)

- order
<br>
use order_db
<br>
show collections
<br>
db.orders.find().pretty()
<br>

![ketqua_order](/public/dl_order.png)


### 6. CI/CD
- Tạo token bên Docker Hub
- Copy token vào GitHub
- Vào GitHub 
- Chọn responsitory 
- Chọn setting -> secrets and variables -> Actions -> 
+ new responsitory secret -> Names(DOCKER_NAME), secret(username đăng nhập bên docker hub)
+ new responsitory secret -> Names(DOCKER_PASSWORD), secret(token của Docker Hub)
- Tạo thư mục .GitHub/workflows
- Tạo file docker-cicd.yml
- Điền thông tin cho file docker-cicd.yml
- Push workflow lên GitHub để chạy CI/CD
<br>
git add .github/workflows/docker-cicd.yml
<br>
git commit -m "update5"
<br>
git push origin main
<br>

### Thao tác với github Action: Thực hiện CI/CD với dự án 
![ketqua_order](/public/githubactions.png)
### CI/CD liên kết với Docker 
![ketqua_order](/public/cicd_docker.png)
