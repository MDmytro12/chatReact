import React from 'react';

import Dialogs from '../../components/Dialogs';


const Home = () => {
    return(
        <section className='home'>

            <div className='dialogs'>
                <Dialogs
                    items={[
                        {
                            user:{
                                name:'Dmytro Medvedev',
                                isOnline: true,
                                isReaded: true,
                                _id: Math.random()
                            },
                            message:{
                                content: 'DKDLKD d ewferf er gfe g re gre',
                                sended_at: new Date()
                            }
                        },
                        {
                            user:{
                                name:'Dmytro Medvedev',
                                isOnline: true,
                                isReaded: true
                            },
                            message:{
                                content: 'DKDLKD d ewferf er gfe g re gre',
                                sended_at: new Date()
                            }
                        },
                        {
                            user:{
                                name:'Dmytro Medvedev',
                                isOnline: true,
                                isReaded: true
                            },
                            message:{
                                content: 'DKDLKD d ewferf er gfe g re gre',
                                sended_at: new Date()
                            }
                        }
                    ]}
                />
            </div>

            {/* <Message 
            user = {{fullname : 'Dmytro'}}
            avatar = 'https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg'
            text = "There is an alternate version of classNames available which correctly dedupes classes and ensures that falsy classes specified in later arguments are excluded from the result set.  This version is slower about  so it is offered as an opt-in. To use the dedupe version with Node.js, Browserify, or webpack: "
            date = {new Date(2014 , 12 , 23)}
            isIm = {false}
            isRead = {false}
            attachments = {[
                {
                    fielname: 'image.jpg',
                    url: 'https://source.unsplash.com/collection/190723/10x100'
                },
                {
                    fielname: 'image.jpg',
                    url: 'https://source.unsplash.com/collection/193723/10x100'
                },
                {
                    fielname: 'image.jpg',
                    url: 'https://source.unsplash.com/collection/194723/10x100'
                },
                {
                    fielname: 'image.jpg',
                    url: 'https://source.unsplash.com/collection/190733/10x100'
                },
                {
                    fielname: 'image.jpg',
                    url: 'https://source.unsplash.com/collection/190721/10x100'
                },
            ]}
            />

            <Message 
            user = {{fullname : 'Dmytro'}}
            avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsigiuDS18MV0Nm_ueymwj71uX0cgjiMfCw&usqp=CAU'
            text = "There is an alternate version of classNames available which correctly dedupes classes and ensures that falsy classes specified in later arguments are excluded from the result set.  This version is slower about  so it is offered as an opt-in. To use the dedupe version with Node.js, Browserify, or webpack: "
            date = {new Date(2014 , 12 , 23)}
            isIm={true}
            isRead = {true}
            attachments = {[
                {
                    fielname: 'image.jpg',
                    url: 'https://source.unsplash.com/collection/191723/10x100'
                },
                {
                    fielname: 'image.jpg',
                    url: 'https://source.unsplash.com/collection/197723/10x100'
                },
                {
                    fielname: 'image.jpg',
                    url: 'https://source.unsplash.com/collection/190722/10x100'
                },
            ]}
            />
            
            <Message 
            user = {{fullname : 'Dmytro'}}
            avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsigiuDS18MV0Nm_ueymwj71uX0cgjiMfCw&usqp=CAU'
            text = "There is an alternate version of classNames available which correctly dedupes classes and ensures that falsy classes specified in later arguments are excluded from the result set.  This version is slower about  so it is offered as an opt-in. To use the dedupe version with Node.js, Browserify, or webpack: "
            date = {new Date(2014 , 12 , 23)}
            isIm={true}
            isRead = {true}
            attachments = {[
                {
                    fielname: 'image.jpg',
                    url: 'https://source.unsplash.com/collection/191723/10x100'
                },
                {
                    fielname: 'image.jpg',
                    url: 'https://source.unsplash.com/collection/197723/10x100'
                },
                {
                    fielname: 'image.jpg',
                    url: 'https://source.unsplash.com/collection/190722/10x100'
                },
            ]}
            />

            <Message 
            user = {{fullname : 'Dmytro'}}
            avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsigiuDS18MV0Nm_ueymwj71uX0cgjiMfCw&usqp=CAU'
            date = {new Date(2014 , 12 , 23)}
            isIm={true}
            isRead = {true}
            attachments = {[
                {
                    fielname: 'image.jpg',
                    url: 'https://source.unsplash.com/collection/191723/10x100'
                }
            ]}
            />
            <Message 
            user = {{fullname : 'Dmytro'}}
            avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsigiuDS18MV0Nm_ueymwj71uX0cgjiMfCw&usqp=CAU'
            date = {new Date(2014 , 12 , 23)}
            isIm={false}
            isRead = {true}
            attachments = {[
                {
                    fielname: 'image.jpg',
                    url: 'https://source.unsplash.com/collection/191723/10x100'
                }
            ]}
            />    

            <Message 
                user = {{fullname : 'Dmytro'}}
                avatar = 'https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg'
                isTyping = {true}
            /> */}

        </section>
    )
}

export default Home;