import React from 'react';
import preloader from './preloader.gif';

let Preloader = (props) => {
    return (
        <div>
            {props.isFetching ? <img src={preloader} alt="preloader" /> : null}
        </div>
    );
}
export default Preloader;