import { table } from "console"
import {users, products, purchases} from "./database"
 
export type TUser = {
    id: string,
    email: string,
    password: string
  }
  
  export type TProduct = {
    id: string,
    name: string,
    price: number,
    category: string
  }
  
  export type TPurchase = {
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
  }

function main(){
  console.table(users, ['id', 'email', 'password'])
  console.table(products, ['id', 'name', 'price', 'category'])
  console.table(purchases, ['userId', 'productId', 'quantity', 'totalPrice'])
}

main()