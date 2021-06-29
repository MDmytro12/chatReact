import React from 'react';
import { WhiteBlock } from 'components';
import {Route} from 'react-router-dom';

import './Auth.css';
import {LoginForm , RegisterForm} from 'modules';

const Auth = () => {

    return (
        <section className="auth">
            <WhiteBlock>
                <div className="auth__content">
                    <Route path={['/' ,'/login']} exact  component={LoginForm} />
                    <Route  path="/reg" component={ RegisterForm } />
                </div>
            </WhiteBlock>
        </section>
    )
}

export default Auth;