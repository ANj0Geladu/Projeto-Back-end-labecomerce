"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
function main() {
    console.table(database_1.users, ['id', 'email', 'password']);
    console.table(database_1.products, ['id', 'name', 'price', 'category']);
    console.table(database_1.purchases, ['userId', 'productId', 'quantity', 'totalPrice']);
}
main();
//# sourceMappingURL=types.js.map