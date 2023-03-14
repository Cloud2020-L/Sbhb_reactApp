import React, { useContext } from 'react';
import classes from './Counter.module.css';
// 引入图标字体
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import CartContext from '../../../store/cart-context';

const Counter = (props) => {

    // 引用Context
    const cxt = useContext(CartContext);

    // 增加按钮的单击响应函数
    const addButtonHandler = () => {
        cxt.cartDispatch({ type: 'ADD', meal: props.meal })
    }

    // 减少当前商品的单击响应函数
    const subButtonHandler = () => {
        cxt.cartDispatch({ type: 'REMOVE', meal: props.meal })
    }
    return (
        <div className={classes.Counter}>
            {
                (props.meal.amount && props.meal.amount !== 0) ? (
                    <>
                        {/* 减少尚商品按钮 */}
                        <button onClick={subButtonHandler} className={classes.counterSub}><FontAwesomeIcon icon={faMinus} /></button>
                        {/* 商品的个数 */}
                        <span className={classes.counterSpan}>{props.meal.amount}</span>
                    </>
                ) : null
            }
            {/* 添加商品按钮 */}
            <button onClick={addButtonHandler} className={classes.counterAdd}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    );
};

export default Counter;