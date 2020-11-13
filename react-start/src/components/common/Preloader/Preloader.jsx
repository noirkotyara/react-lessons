import React from 'react';
import preloader from './777.gif';
import cl from './Preloader.module.css';

let Preloader = (props) => {
    return (
        <div>
            {props.isFetching ? <img className={cl.preloader} src={preloader} alt="preloader" /> : null}
        </div>
    );
}
export default Preloader;