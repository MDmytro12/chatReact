import React from 'react';
import classNames from 'classnames';

import './DialogItem.css';

import Time from '../Time';

import svgReaded from '../../assets/img/read.svg';
import svgUnreaded from '../../assets/img/unread.svg';

import getRGB from '../../utils/helpers/getRGB';
const tinyColor = require('tinycolor2');

const getAvatar = ( user ) => {
    if(user.avatar){
        return <img src={user.avatar} alt='Avatar icon!' className='dialogs_item-avatar-image' />
    } else{ 
        const [r , g , b] = getRGB(user.name) ;

        let color = tinyColor({
            r,
            g,
            b
        });


        console.log(`linear-gradient(to top left , ${color.toHexString()} , ${color.lighten().toHexString()} )`);
        return (
        <div className='dialogs_item-avatar-image' style={{backgroundImage: `linear-gradient(to top left, ${color.toHexString()} , ${color.lighten(50).toHexString()} )`,color: 'white' , fontSize:'40px',display:'flex' , justifyContent: 'center' , alignItems: 'center' , fontWeight: '600'}}>
            {user.name.substr(0 , 1)}
        </div>)
    }
}


const DialogItem = ({user , message}) => (
    <div className={classNames('dialogs_item' , {'dialogs_item--online' : user.isOnline})}>
        <div className='dialogs_item-avatar'>
            {getAvatar(user)}
        </div>
        <div className='dialogs_item-info'>
            <div className='dialogs_item-info-top'>
                <b>
                    {user.name}
                </b>
                <span>
                    <Time date={message.sended_at}/>
                </span>
            </div>
            <div className='dialogs_item-info-bottom'>
                <p>
                {message.content}
                </p>
            </div>
            <div className='dialogs_item-info-readed'>
                {user.isReaded && <img src={svgReaded} alt='Icon readed!' />}
                {!user.isReaded && <img src={svgUnreaded} alt='Icon readed!' /> }
            </div>
        </div>
    </div>
)

export default DialogItem;