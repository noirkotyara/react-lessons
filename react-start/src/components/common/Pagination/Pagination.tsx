import React, { useState } from 'react';
import cl from './Pagination.module.css';
import cn from 'classnames';

type PropsType = {
    totalCount: number
    pageSize: number
    currentPage: number

    changeCurPage: (page: number) => void
}

let Pagination = (props: PropsType) => {
    
    let portionSize = 5;
    let pagesQuantity = Math.ceil(props.totalCount / props.pageSize);
    let pA = [];
    for (let i = 1; i <= pagesQuantity; i++) {
        pA.push(i);
    }


    const [ currentPortion, setCurrentPortion ] = useState(1);
    let portionNumber = Math.ceil(pagesQuantity / portionSize);
    let leftBorder = ((currentPortion - 1) * portionSize) + 1;
    let rightBorder = portionSize * currentPortion;
 
    return (
        <>
            <div className={cn(cl.pages)}>
                {currentPortion > 1 && <button onClick={() => setCurrentPortion(currentPortion-1)}>minus</button> }
                {pA
                .filter(page => page >= leftBorder && page <= rightBorder)
                .map(page => {
                    return (
                        <span onClick={() => { props.changeCurPage(page) }} className={cn({[cl.pageSelected || cl.page]: props.currentPage === page}) } key={page}>{page} </span>
                    );
                })
                }
                {portionNumber > currentPortion && <button onClick={() => setCurrentPortion(currentPortion+1)}>plus</button> }
            </div>
        </>
    );

}

export default Pagination;

