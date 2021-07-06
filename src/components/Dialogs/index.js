import React from 'react';

import DialogItem from '../DialogItem';

import './Dialogs.css';
import { orderBy } from 'lodash-es';

const Dialogs = ({items}) => (
    <div className='dialogs'>
        {orderBy(items , ['sended_at'], ['asc']).map( item  => <DialogItem user={item.user} message={item.message} key={item.user._id} /> )}
    </div>
)

export default Dialogs;