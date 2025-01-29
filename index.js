import mysql from "mysql2/promise";
import {config} from "dotenv";
config()


const pool =mysql.createPool({
  hostname:process.env.HOSTNAME,
  user:process.env.USER,
  password:process.env.PASSWORD,
  database:process.env.DATABASE
})


 const getUsers = async()=>{
    let users= await pool.query("SELECT * FROM users")
    return users
 }


 console.log(await getUsers());


 const getProducts = async()=>{
    let products= await pool.query("SELECT * FROM products")
    return products
 }


 console.log(await getProducts());


 const deleteProduct = async()=>{
    let product= await pool.query("DELETE FROM products WHERE product_code =  'baro1'")
    return product
 }

 
 console.log(await deleteProduct());


 const insertProduct = async()=>{
    let product= await pool.query("INSERT INTO products (product_code,product_name,product_price,product_quantity) VALUES ('chik1', 'Chicken', 58.99, 40)")
    return product
 }

 
 console.log(await insertProduct());


 const updateProduct = async()=>{
    let product= await pool.query("UPDATE products SET product_name = 'Amazambane' WHERE product_code LIKE 'pota1'")
    return product
 }

 
 console.log(await updateProduct());