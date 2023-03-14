import React, { useReducer, useState } from 'react';
import Cart from './components/Cart/Cart';
import FilterMeals from './components/FilterMeals/FilterMeals';
import Meals from './components/Meals/Meals';
import CartContext from './store/cart-context';


// 模拟一组食物数据
const MEALS_DATA = [
    {
        id: '1',
        title: '汉堡包',
        desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
        price: 12,
        img: '/img/1.png'
    },
    {
        id: '2',
        title: '双层吉士汉堡',
        desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
        price: 20,
        img: '/img/2.png'
    },
    {
        id: '3',
        title: '巨无霸',
        desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
        price: 24,
        img: '/img/3.png'
    }, {
        id: '4',
        title: '麦辣鸡腿汉堡',
        desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
        price: 21,
        img: '/img/4.png'
    }, {
        id: '5',
        title: '板烧鸡腿堡',
        desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
        price: 22,
        img: '/img/5.png'
    }, {
        id: '6',
        title: '麦香鸡',
        desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
        price: 14,
        img: '/img/6.png'
    }, {
        id: '7',
        title: '吉士汉堡包',
        desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
        price: 12,
        img: '/img/7.png'
    }
];

// useReduer() 的工人函数
const cartReducer = (state, action) => {
    const newCart = { ...state };

    switch (action.type) {
        default:
            return state;
        case 'ADD':
            // indexOf() 检查有没有指定的元素，没有就返回-1，有就返回指定元素所在位置的索引
            if (newCart.items.indexOf(action.meal) === -1) {
                // 把指定的元素添加进去
                newCart.items.push(action.meal);
                // 没有那就添加进去
                action.meal.amount = 1;
            } else {
                action.meal.amount += 1;
            }

            // 增加总数，点击了一定会增加
            newCart.totalAmount += 1;

            // 增加总金额
            newCart.totalPrice += action.meal.price;
            return newCart;

        case 'REMOVE':
            // 当前商品数量减一
            action.meal.amount -= 1;

            // 检查商品总数是否归零
            if (action.meal.amount === 0) {
                newCart.items.splice(newCart.items.indexOf(action.meal), 1)
            }

            // 减少商品总数和总额
            newCart.totalAmount -= 1;
            newCart.totalPrice -= action.meal.price;
            return newCart;

        case 'CLEAR':
            newCart.items.forEach(item => delete item.amount);
            newCart.items = [];
            newCart.totalAmount = 0;
            newCart.totalPrice = 0;
            return newCart;

    }
}

const App = () => {
    // 创建一个State，来存储食物列表数据
    const [mealsData, setMealsData] = useState(MEALS_DATA);

    // 定义一个useReduer
    const [cartData, cartDispatch] = useReducer(cartReducer, {
        items: [],
        totalAmount: 0,
        totalPrice: 0
    })

    // 搜索框过滤功能
    const filterHandler = (keyword) => {
        const newMealsData = MEALS_DATA.filter(item => item.title.indexOf(keyword) !== -1);
        setMealsData(newMealsData);
    }

    return (
        <CartContext.Provider value={{ ...cartData, cartDispatch }}>
            <div>
                <FilterMeals onFilter={filterHandler}></FilterMeals>
                <Meals mealsData={mealsData}></Meals>
                <Cart></Cart>
            </div>
        </CartContext.Provider>
    );
};

export default App;