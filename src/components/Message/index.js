import React from 'react';
import PropTypes from 'prop-types';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import uaLocale from 'date-fns/locale/uk';

import './Message.css';
import classNames from 'classnames';

import isReadSvg from 'assets/img/read.svg';
import isUnReadSvg from 'assets/img/unread.svg';

const styleImg = {
    height: '60px',
    width: '60px'
}

const Message = ({avatar , user ,  text , date , isIm , isRead , attachments}) => (
    <div className={classNames('wrapper' , {'wrapper-im': isIm})} >
        

        <div className='message'>
            <div className='msg-avatar'>
                <img style={styleImg} src={avatar} alt={`Avatart user: ${user.fullname}`} />
            </div>
            <div className='msg-content'>   
                <p>{text}</p>
                {isRead && 
                    <img src={isReadSvg} alt='Icon!' className='msg-read' />
                } 

                {!isRead && 
                    <img src={isUnReadSvg} className='msg-read' alt='Icon!' />
                }

                <div className='msg-images'>
                    {
                    attachments.map(
                        item => <img src={item.url} alt={item.filename} className='msg-add-img'/>
                    )
                }
                </div>

            </div>
            
        </div> 
        <span className='msg-date'>{formatDistanceToNow(date , {addSuffix: true , locale: uaLocale})}</span>
    </div>
)

Message.defaultProps  = {
    usr: {}
}

Message.propTypes = {
    avatar: PropTypes.string,
    text : PropTypes.string,
    date : PropTypes.array,
    user: PropTypes.object,
    attachments: PropTypes.array
};


export default Message;