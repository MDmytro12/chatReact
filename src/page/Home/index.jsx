import React from 'react';

import Dialogs from '../../components/Dialogs';

import Message from '../../components/Message';

const Home = () => {
    return(
        <section className='home'>

            <div className='dialogs'>
                <Dialogs
                    items={[
                        {
                            'sended_at': new Date(2018 , 3 ,3),
                            user:{
                                name:'Mantyk Dmytro',
                                isOnline: true,
                                isReaded: true,
                                _id: Math.random(),
                                avatar: null
                            },
                            message:{
                                content: '2018',
                                sended_at: new Date(2018 , 3 ,23)
                            }
                        },
                        {
                            'sended_at': new Date(2019 , 3 ,13),
                            user:{
                                name:'Ishchuk Roman',
                                isOnline: true,
                                isReaded: false,
                                _id: Math.random(),
                                avatar: null
                            },
                            message:{
                                content: '2019',
                                sended_at: new Date(2015 , 4 ,12)
                            }
                        },
                        {
                            'sended_at': new Date(2021 , 3 ,13),
                            user:{
                                name:'Dmytro Medvedev',
                                isOnline: true,
                                isReaded: true,
                                _id: Math.random(),
                                avatar: null
                            },
                            message:{
                                content: '2021  ',
                                sended_at: new Date(2021 , 3 , 23)
                            }
                        }
                    ]}
                />
            </div>
{/* 
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
            /> */}

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
            isIm={false}
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
                avatar = 'https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg'
                audio  = {true}
            /> 

            <Message 
                user = {{fullname : 'Dmytro'}}
                avatar = 'https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg'
                audio  = {true}
            />

        </section>
    )
}

export default Home;