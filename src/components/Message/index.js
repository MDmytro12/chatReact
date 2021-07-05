import React from 'react';
import PropTypes from 'prop-types';

import Time from '../Time';

import './Message.css';
import classNames from 'classnames';

import isReadSvg from 'assets/img/read.svg';
import isUnReadSvg from 'assets/img/unread.svg';

const styleImg = {
    height: '60px',
    width: '60px'
}

const Message = ({avatar , user ,  text , date , isIm , isRead , attachments , isTyping}) => {

    return ( <div className={classNames('wrapper' , {'wrapper-im': isIm , 'wrapper-typing': isTyping , 'wrapper-image ': attachments && attachments.length === 1 })} >

    <div className='message'>
        <div className='msg-avatar'>
            <img style={styleImg} src={avatar} alt={`Avatart user: ${user.fullname}`} />
        </div>
        <div className='msg-content'>   
            <p>{text}</p>
            
            {isTyping && 
                <div className='msg--typing'>
                    <div className='dot-one'></div>
                    <div className='dot-two'></div>
                    <div className='dot-three   '></div>
                </div>
            }
            
            {isRead && date && 
                <img src={isReadSvg} alt='Icon!' className='msg-read' />
            } 

            {!isRead && date     && 
                <img src={isUnReadSvg} className='msg-read' alt='Icon!' />
            }
            

            {attachments && 
            <div className='msg-images'>
                {
                attachments.map(
                    (item , index) => <img src={item.url} alt={item.filename} key={index} className='msg-add-img'/>
                )
                }
            </div>}

        </div>
        
    </div> 
    {date && 
    <span className='msg-date'>
        <Time date = {new Date()}/>
    </span>
    }
    
</div>)
}

Message.defaultProps  = {
    usr: {}
}

Message.propTypes = {
    avatar: PropTypes.string,
    text : PropTypes.string,
    date : PropTypes.array,
    user: PropTypes.object,
    attachments: PropTypes.array, 
    isTyping: PropTypes.bool
};

export default Message;