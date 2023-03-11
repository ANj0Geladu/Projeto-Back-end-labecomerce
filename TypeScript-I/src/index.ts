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

  console.log('Users:', users);
  console.log('Products:', products);
  console.log('Purchases:', purchases);
