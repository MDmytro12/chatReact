import React from 'react';
import { WhiteBlock } from 'components';
import { Form, Input, Button as ButtonNew} from 'antd';

import {Link} from 'react-router-dom';

import '../../../page/Auth/Auth.css';


class LoginForm extends React.Component{
    render () {
        return (
            <section className="auth">
            <WhiteBlock>
                <div className="auth__content">
                    <div className="auth__top">
                        <h2>ВХІД</h2>
                    </div>
                    <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    >
                        <Form.Item
                            name="username" 
                            validateStatus="success"
                        >
                        <Input placeholder="Логін" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                        >
                            <Input.Password placeholder="Пароль" />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <ButtonNew size="large" type="primary" >
                            Увійти
                            </ButtonNew>
                        </Form.Item>
                        <Link to='reg' className="link--reg">Реєстрація</Link>
                    </Form>
                </div>
            </WhiteBlock>
        </section>
        )
    }
}

export default LoginForm;