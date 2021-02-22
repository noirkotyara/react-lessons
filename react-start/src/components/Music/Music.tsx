import React, { SetStateAction, useState } from 'react';
import Reservation from './Forms';
import cl from './Music.module.css';
import { OuterClick } from './OuterClick';
import { OuterClick2 } from './OuterClick2';
import TemperatureCalculator from './TempCalculator';

const Music: React.FC<{}> = () => {
    return (
        <div>
            <Reservation />
            <TemperatureCalculator />
            <OuterClick />
            <OuterClick2/>
        </div>
    )
}

export default Music;

