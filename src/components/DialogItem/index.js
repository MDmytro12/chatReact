import React from 'react';
import classNames from 'classnames';

import './DialogItem.css';

import svgReaded from '../../assets/img/read.svg';
import svgUnreaded from '../../assets/img/unread.svg'

const getAvatar = avatar => {
    if(avatar){
        return <img src={avatar} alt='Avatar icon!' className='dialogs_item-avatar-image' />
    } else{ 
        // make avatar
    }
}

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
                    12:30
                </span>
            </div>
            <div className='dialogs_item-info-bottom'>
                <p>
                {message.content}
                </p>
            </div>
            <div className='dialogs_item-info-readed'>
                {user.isReaded && <img src={svgReaded} alt='Icon readed!' />}
            </div>
        </div>
    </div>
)

export default DialogItem;