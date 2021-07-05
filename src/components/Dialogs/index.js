import React from 'react';
import classNames from 'classnames';

import DialogItem from '../DialogItem';

import './Dialogs.css';

const Dialogs = ({items}) => (
    <div className='dialogs'>
        {items.map( (item , index) => <DialogItem user={item.user} message={item.message} /> )}
    </div>
)

export default Dialogs;