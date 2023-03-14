import React from 'react';
import Counter from '../../../UI/Counter/Counter';
import classes from './CheckoutItem.module.css';


const CheckoutItem = (props) => {
    return (
        <div className={classes.CheckoutItem}>
            {/* 商品图片容器 */}
            <div className={classes.MealImg}>
                <img src={props.meal.img}></img>
            </div>

            {/* 商品描述 */}
            <div className={classes.Desc}>
                <h2 className={classes.Title}>{props.meal.title}</h2>
                <div className={classes.PriceOuter}>
                    <Counter meal={props.meal} />
                    <div className={classes.Price}>{props.meal.price * props.meal.amount}</div>
                </div>

            </div>
        </div>
    );
};

export default CheckoutItem;