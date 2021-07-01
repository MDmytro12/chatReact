import React from 'react';

import { Message } from 'components';



const Home = () => {
    return(
        <section className='home'>
            <Message 
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
            isRead = {false}
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
            isRead = {false}
            attachments = {[
                {
                    fielname: 'image.jpg',
                    url: 'https://source.unsplash.com/100x100/random=1&nature,water'
                },
                {
                    fielname: 'image.jpg',
                    url: 'https://source.unsplash.com/100x100/random=2&nature,water'
                },
                {
                    fielname: 'image.jpg',
                    url: 'https://source.unsplash.com/100x100/random=3&nature,water'
                },
            ]}
            />


        </section>
    )
}

export default Home;