"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchases = exports.products = exports.users = void 0;
const users = [
    {
        id: '1',
        email: 'joao@gmail.com',
        password: 'joao123',
    },
    {
        id: '2',
        email: 'maria@gmail.com',
        password: 'maria123',
    },
];
exports.users = users;
const products = [
    {
        id: '1',
        name: 'Camisa Polo',
        price: 50,
        category: 'Roupas',
    },
    {
        id: '2',
        name: 'Calça Jeans',
        price: 80,
        category: 'Roupas',
    },
];
exports.products = products;
const purchases = [
    {
        userId: '1',
        productId: '1',
        quantity: 2,
        totalPrice: 100,
    },
    {
        userId: '2',
        productId: '2',
        quantity: 3,
        totalPrice: 240,
    },
];
exports.purchases = purchases;
//# sourceMappingURL=database.js.map