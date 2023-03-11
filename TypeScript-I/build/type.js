"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
console.table(database_1.users, ['id', 'name', 'password']);
console.table(database_1.products, ['id', 'name', 'price', 'category']);
console.table(database_1.purchases, ['userId', 'productId', 'quantify', 'totalPrice']);
//# sourceMappingURL=index.js.map