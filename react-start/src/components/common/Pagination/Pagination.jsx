import React, { useState } from 'react';
import cl from './Pagination.module.css';

let Pagination = (props) => {
    
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
            <div className={cl.pages}>
                {currentPortion > 1 && <button onClick={() => setCurrentPortion(currentPortion-1)}>minus</button> }
                {pA
                .filter(page => page >= leftBorder && page <= rightBorder)
                .map(page => {
                    return (
                        <span onClick={() => { props.changeCurPage(page) }} className={props.currentPage === page && cl.pageSelected} key={page}>{page} </span>
                    );
                })
                }
                {portionNumber > currentPortion && <button onClick={() => setCurrentPortion(currentPortion+1)}>plus</button> }
            </div>
        </>
    );

}

export default Pagination;

