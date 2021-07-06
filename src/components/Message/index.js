import React ,{useState , useRef , useEffect} from 'react';
import PropTypes from 'prop-types';

import Time from '../Time';

import './Message.css';
import classNames from 'classnames';

import isReadSvg from 'assets/img/read.svg';
import isUnReadSvg from 'assets/img/unread.svg';
import WaveSvg from 'assets/img/wave.svg';
import audioPlaySvg from 'assets/img/play.svg';
import audioPauseSvg from 'assets/img/pause.svg';

import soundKorz from '../../assets/audio/korz.mp3';
import { toInteger } from 'lodash-es';

const styleImg = {
    height: '60px',
    width: '60px'
}

const Message = ({avatar , user ,  text , date , isIm , isRead , attachments , isTyping , audio}) => {

    const [playingAudio , setPlaying] = useState(false);

    const audioProgress = useRef(null);
    const audioRef = useRef(null);
    const audioTime = useRef(null);

    const getMinutesAudio = time => {
        let minutes = toInteger(Math.floor(time/60));
        let seconds = toInteger(time%60);

        if(minutes < 10 && seconds < 10){
            return `0${minutes}:0${seconds}`;
        }else if (minutes < 10 && seconds >= 10 ) {
            return `0${minutes}:${seconds}`;
        }else if( minutes >= 10 && seconds < 10 ){
            return `${minutes}:0${seconds}`
        }

        return `${minutes}:${seconds}`;
    }    

    const togglePlay = () => {
        
        audioRef.current.addEventListener('timeupdate' , () => {
            audioProgress.current.style.setProperty('width' ,100*(audioRef.current.currentTime/audioRef.current.duration) + '%' , 'important');

            audioTime.current.innerText =   getMinutesAudio(audioRef.current.currentTime);
        })

        audioRef.current.addEventListener('ended' , () => {
            setPlaying(false);
            audioProgress.current.style.setProperty('width' , '0%' , 'important');
            audioTime.current.innerText = '00:00';
        });
        
        audioRef.current.volume = '0.1';
        if(playingAudio){
            audioRef.current.pause();
        }else{
            audioRef.current.play();
        }
        
        setPlaying(!playingAudio);
    }

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

            {audio && 
                <div className='audio'>
                    
                    <div className='audio-info'>
                         <audio ref={audioRef} >
                             <source src={soundKorz} type='audio/mpeg' />
                         </audio>
                         <div className='audio-info-btn'>
                            <button className='audio-info-btn-play' onClick={togglePlay} >
                               { playingAudio ? <img src={audioPauseSvg} alt='Icon pause!' /> : <img src={audioPlaySvg} alt='Icon play!' /> } 
                            </button>
                        </div>
                        <div className='audio-info-wave'>
                            <div className='audio-progress' ref={audioProgress} >
                            </div>

                            <img src={WaveSvg} alt='Icon wave!' />
                        </div>
                        <span className='audio-info-duration' ref={audioTime}> 00:00 </span>
                    </div>
                </div>
            }

        </div>
        
    </div> 
    {date && 
    <span className='msg-date'>
        <Time date = {new Date()}/>
    </span>
    }
    
</div>)
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