import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import classes from './Checkout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../../store/cart-context';
import CheckoutItem from './CheckoutItem/CheckoutItem';
import Bar from './Bar/Bar';

// 获取根元素
const CheckoutRoot = document.getElementById('checkout-root');
const Checkout = (props) => {
    const ctx = useContext(CartContext)

    // 开启一个传送门
    return ReactDOM.createPortal(
        <div className={classes.Checkout}>
            {/* 小叉叉 */}
            <div className={classes.Close}>
                <FontAwesomeIcon onClick={() => props.onHide()} icon={faXmark}></FontAwesomeIcon>
            </div>

            {/* 账单容器 */}
            <div className={classes.MealsDesc}>

                {/* 头部信息 */}
                <header className={classes.Header}>
                    <h2 className={classes.Title}>餐品详情</h2>
                </header>

                {/* 账单项信息 */}
                <div>
                    {/* 账单项信息 */}
                    {ctx.items.map(item => <CheckoutItem key={item.id} meal={item}></CheckoutItem>)}
                </div>

                <footer className={classes.Footer}>
                    <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
                </footer>
            </div>

            {/* 下部支付条 */}
            <Bar totalPrice={ctx.totalPrice}></Bar>

        </div>, CheckoutRoot);
};

export default Checkout;