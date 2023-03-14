import React from 'react';
import Meal from './Meal/Meal';
import classes from './Meals.module.css';

// 食物列表组件
const Meals = (props) => {
    return (
        /*现在将滚动条设置给了Meals*/
        <div className={classes.Meals}>
            {props.mealsData.map(itme => <Meal key={itme.id} meal={itme}></Meal>)}
        </div>
    );
};

export default Meals;