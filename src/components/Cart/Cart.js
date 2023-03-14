import React, { useContext, useEffect, useState } from 'react';
import classes from './Cart.module.css';
import iconImg from '../../asset/bag.png';
import CartContext from '../../store/cart-context';
import CartDetails from './CartDetails/CartDetails';
import Checkout from './Checkout/Checkout';

const Cart = () => {

    const ctx = useContext(CartContext);

    // 添加一个state，来设置购物车详情是否显示
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        if (ctx.totalAmount === 0) {
            setShowDetails(false);
            setShowCheckout(false)
        }
    })

    // 定义一个函数，用来修改state值
    const toggleDetailsHandler = () => {
        // 判断购物车为空时不显示购物车详情页
        if (ctx.totalAmount === 0) {
            setShowDetails(false);
            return
        };

        // 取反，用来点击的时候显示再点击的时候隐藏
        setShowDetails(prevState => !prevState);
    };

    // 添加一个state，用来显示隐藏结账页面
    const [showCheckout, setShowCheckout] = useState(false);

    // 定义一个结账页函数,用来显示
    const showCheckoutHandler = () => {
        if (ctx.totalAmount !== 0) {
            setShowCheckout(true);
        }

    }

    // 定义一个函数用来隐藏结账页
    const hideCheckoutHandler = () => {
        setShowCheckout(false);
    }



    return (
        <div onClick={toggleDetailsHandler} className={classes.Cart}>
            {/* 结账页 */}
            {showCheckout && <Checkout onHide={hideCheckoutHandler}></Checkout>}

            {/* 引入购物车详情  判断如果state为true那就显示*/}
            {showDetails && < CartDetails />}

            {/* 购物车图片容器 */}
            <div className={classes.Icon}>
                {/* 图片 */}
                <img src={iconImg} ></img>
                {/* 商品总数 , 并进行判断是否显示 */}
                {ctx.totalAmount !== 0 ? <span className={classes.TotalAmount}>{ctx.totalAmount}</span> : ''}
            </div>

            {/* 商品总价格 */}

            {ctx.totalPrice !== 0 ? <p className={classes.Price}>{ctx.totalPrice}</p> : <p className={classes.NoMeal}>未选购商品</p>}


            {/* 结算按钮 */}
            <button onClick={showCheckoutHandler} className={`${classes.Button} ${ctx.totalAmount === 0 ? classes.Disabled : ''}`}>去结算</button>

        </div >
    );
};

export default Cart;