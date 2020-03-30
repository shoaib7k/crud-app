# crud-app

Clone the whole project and change directories to server by- cd server.
Then install npm by npm install
 Create the new mysql database 'testdb' 
 For seeding the initial database with Product and Brand write command- sequelize db:seed:all
 Now write- node server.js or npm start to fire up the server. The server will run on localhost:8050

The base server url format for all endpoints is:

http://localhost:8050/api

POST /brands create a new brand(name:string)
GET /brands return all the brands
GET /brands/:id return one speciic brand
PUT /brands/:id update one brand 
DELETE /brands/:id delete one brand
DELETE /brands delete all the brands

POST /products create a new product(name:string,brand:string)
GET /products return all the products
GET /products/:id return one speciic product
PUT /product/:id update one product 
DELETE /products/:id delete one product
DELETE /products delete all the products

Now change the directories to client-
              cd .. 
              cd client
  Now write the command -   npm run serve 
The client will run on localhost:8000

Cheers!!



 
