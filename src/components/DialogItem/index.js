import React from 'react';
import classNames from 'classnames';

import './DialogItem.css';

import svgReaded from '../../assets/img/read.svg';
import svgUnreaded from '../../assets/img/unread.svg'
import { format } from 'date-fns';

const getAvatar = avatar => {
    if(avatar){
        return <img src={avatar} alt='Avatar icon!' className='dialogs_item-avatar-image' />
    } else{ 
        // make avatar
    }
}

const getCorrectTime = time => format(new Date() , 'HH:mm');

const DialogItem = ({user , message}) => (
    <div className={classNames('dialogs_item' , {'dialogs_item--online' : user.isOnline})}>
        <div className='dialogs_item-avatar'>
            {getAvatar('https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg')}
        </div>
        <div className='dialogs_item-info'>
            <div className='dialogs_item-info-top'>
                <b>
                    {user.name}
                </b>
                <span>
                    {getCorrectTime(message.sended_at)}
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