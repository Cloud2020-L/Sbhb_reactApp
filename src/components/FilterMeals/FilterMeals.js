import React, { useEffect, useState } from 'react';
// 引入图标字体库
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 引入想要的图标字体
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// 引入css
import classes from './FilterMeals.module.css';

const FilterMeals = (props) => {

    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        // 用户输入完了你再过滤，用户输入过程中，不要过滤
        // 当用户停止输入一秒后，我们才做查询
        const times = setTimeout(() => {
            props.onFilter(keyword);
        }, 800);
        return () => {
            clearTimeout(times);
        }
    }, [keyword]);

    // 获取用户输入的内容
    const inputChangeHandler = (e) => {
        setKeyword(e.target.value.trim())

    }

    // props.onChange(e.target.value);
    // console.log(e.target.value);

    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                <input
                    onChange={inputChangeHandler}
                    className={classes.SearchInput}
                    type='text'
                    placeholder='请输入关键字'
                    value={keyword}
                ></input>
                {/* 使用图标字体 */}
                <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch}></FontAwesomeIcon>
            </div>
        </div>
    );
};


export default FilterMeals;