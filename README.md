### 1.	Download source code
### 2.	Run npm install
### 3.	Thêm dữ liệu
-	Thêm dữ liệu cho file .env của api-gateway, auth, product, order
<br>
-   Thêm dữ liệu cho Dockerfile của api-gateway, auth, product, order
<br>
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

<br>
Chọn Headers->key:x-auth-token->value là giá trị của token có được từ login
<br>
Sử dụng GET để có thể thực hiện được cái dashboard
<br>

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
use auth_db
<br>
show collections
<br>
db.users.find().pretty()
<br>

![ketqua_auth](/public/dl_auth.png)

- product
use product_db
<br>
show collections
<br>
db.products.find().pretty()
<br>

![ketqua_product](/public/dl_product.png)

- order
use order_db
<br>
show collections
<br>
db.orders.find().pretty()
<br>

![ketqua_order](/public/dl_order.png)


