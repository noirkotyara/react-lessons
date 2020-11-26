import React from 'react';
import preloader from './preloader.svg';
import cl from './Preloader.module.css';

let Preloader = () => {
    return (
        <div className={cl.divPreloader}>
            <img className={cl.preloader} src={preloader} alt="preloader" />
        </div>
    );
}
export default Preloader;