import React , {Fragment} from 'react';
import PropTypes from 'prop-types'

import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import uaLocale from 'date-fns/locale/uk';

const Time = ({date}) => <Fragment>{formatDistanceToNow(date , {addSuffix: true , locale: uaLocale}) }</Fragment>

Time.propTypes = {
    date : PropTypes.string
}


export default Time;