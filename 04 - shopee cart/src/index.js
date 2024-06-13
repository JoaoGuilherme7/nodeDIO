// carrinho shopee
import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";


const myCart = [];
const myWhishlist =[];

console.log("🛒 :::WELCOME TO YOUR CART:::🛒\n")

const item1 = await createItem('hotwheels ferrari', 20.99, 1);
const item2 = await createItem('hotwheels lamborghini', 39.99, 3);

console.log(`SUBTOTAL DE ${item1.name}: ${item1.subtotal()}`);
console.log(`SUBTOTAL DE ${item2.name}: ${item2.subtotal()}`);

//adding 2 items
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

//deleting 2 items
// await cartService.deleteItem(myCart, item1.name);
// await cartService.deleteItem(myCart, item2.name);

await cartService.displayCart(myCart);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);



await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);