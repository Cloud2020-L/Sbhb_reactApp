import React from 'react';
import Counter from '../../UI/Counter/Counter';
// 引入样式
import classes from './Meal.module.css';

// 食物信息组件
const Meal = (props) => {
    return (
        <div className={classes.Meal}>
            {/* 图片容器 */}
            <div className={classes.Imgbox}>
                <img src={props.meal.img}></img>
            </div>
            {/* 内容信息容器 */}
            <div className={classes.DescBox}>
                {/* 商品名称 */}
                <h2 className={classes.Title}>{props.meal.title}</h2>
                {/* 商品内容 */}
                {props.onDesc ? null : <p className={classes.Desc}>{props.meal.desc}</p>}
                {/* 单价和数量容器 */}
                <div className={classes.PriceWrap}>
                    {/* 单价 */}
                    <span className={classes.Price}>{props.meal.price}</span>
                    {/* 商品计数器 */}
                    <div>
                        <Counter meal={props.meal}></Counter>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meal;