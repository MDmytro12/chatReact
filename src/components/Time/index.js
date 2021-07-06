import React , {Fragment} from 'react';
import PropTypes from 'prop-types'

import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import uaLocale from 'date-fns/locale/uk';

import { format } from 'date-fns';

const Time = ({date}) => <Fragment>{format(date, 'HH:mm') }</Fragment>

Time.propTypes = {
    date : PropTypes.string
}


export default Time;