import React, { useContext, useState } from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from './CartDetails.module.css';
import Meal from '../../Meals/Meal/Meal';
import CartContext from '../../../store/cart-context';
import Confirm from '../../UI/Confirm/Confirm';


const CartDetails = () => {
    const ctx = useContext(CartContext);

    // 设置一个state用来隐藏清空购物车弹框
    const [showConfirm, setShowConfirm] = useState(false);

    // 设置显示购物车函数
    const showConfirmHandler = () => {
        setShowConfirm(true);
    }

    // 取消按钮
    const cancelHandler = (e) => {
        e.stopPropagation();
        setShowConfirm(false);
    }

    // 确认按钮
    const YesHandler = () => {
        // 清空购物车
        ctx.cartDispatch({ type: 'CLEAR' })
    }

    return (<Backdrop>
        {/* 确认清空购物车弹框 */}
        {showConfirm && <Confirm confirmText={'确认清空购物车吗'} onCancel={cancelHandler} onYes={YesHandler}></Confirm>}

        {/* 总容器 */}
        <div onClick={e => e.stopPropagation()} className={classes.CartDetails}>
            {/* 头部信息 */}
            <header className={classes.Header}>
                <h2 className={classes.Title}>餐品详情</h2>
                <div onClick={showConfirmHandler} className={classes.Clear}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    <span>清空购物车</span>
                </div>
            </header>

            {/* 商品详情信息 */}
            <div className={classes.MealList}>
                {ctx.items.map(itme => <Meal onDesc key={itme.id} meal={itme}></Meal>)}
            </div>
        </div>
    </Backdrop>)
};

export default CartDetails;