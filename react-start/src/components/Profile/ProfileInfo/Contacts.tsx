import React from 'react';
import { ContactsType } from '../../../types/types';
import cl from './ProfileInfo.module.scss';

const socialIcons = {
    facebook: 'https://www.flaticon.com/svg/static/icons/svg/2111/2111393.svg',
    website: 'https://www.flaticon.com/svg/static/icons/svg/2847/2847798.svg',
    vk: 'https://www.flaticon.com/svg/static/icons/svg/2111/2111712.svg',
    twitter: 'https://www.flaticon.com/svg/static/icons/svg/733/733579.svg',
    instagram: 'https://www.flaticon.com/svg/static/icons/svg/174/174855.svg',
    youtube: 'https://www.flaticon.com/svg/static/icons/svg/1384/1384060.svg',
    github: 'https://www.flaticon.com/svg/static/icons/svg/733/733553.svg',
    mainLink: 'https://www.flaticon.com/svg/static/icons/svg/2111/2111644.svg'

};

type OwnPropsType = {
    property: string
    value: string
}

const Contact: React.FC<OwnPropsType> = ({ property, value }) => {
    let sIcon;
    Object
    .keys(socialIcons)
    .forEach(key => { 
        if(key===property)  
        sIcon = socialIcons[key as keyof ContactsType]});
    return (<>
        {value
            && <span><a href={value}><img className={cl.socialIcon}
                    src={sIcon} alt="" /></a>
                 </span>
            }
    </>)
}

export default Contact;