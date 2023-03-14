import React from 'react';

// 创建context
const CartContext = React.createContext({
    // 添加的对象
    items: [],
    // 总钱数
    totalAmount: 0,
    // 总数量
    totalPrice: 0,
    cartDispatch: () => {

    }
})
export default CartContext;