import React from 'react';
import { WhiteBlock } from 'components';
import { Form, Input, Button as ButtonNew  } from 'antd';
import {CheckCircleOutlined} from '@ant-design/icons';

import {Link} from 'react-router-dom';

import '../../../page/Auth/Auth.css';


class RegisterForm extends React.Component{
    render () {
        let success = true;

        return (
            <section className="auth">
            <WhiteBlock>
                <div className="auth__content">
                    <div className="auth__top">
                        <h2>РЕЄСТРАЦІЯ</h2>
                    </div>
                    {!success ? <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    >
                        <Form.Item
                            name="username" 
                            validateStatus="success"
                        >
                        <Input placeholder="Email" />
                        </Form.Item>

                        <Form.Item
                            name="userrealname" 
                            validateStatus="success"
                            type='mail'
                        >
                        <Input placeholder="Ваше ім'я" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                        >
                            <Input.Password placeholder="Пароль" />
                        </Form.Item>

                        <Form.Item
                            name="passwordYet"
                        >
                            <Input.Password placeholder="Повторіть пароль" />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <ButtonNew size="large" type="primary" >
                            Реєстрація
                            </ButtonNew>
                        </Form.Item>
                        <Link to='/login' className="link--reg">Ввійти</Link>
                    </Form> : 
                     <div class='reg-scs-wrapper'>
                         <div className="reg-scs-text">
                         Пройшла успішно.
                         </div>
                        <CheckCircleOutlined className='reg-success' />
                        <div className="reg-scs-text">
                        Будь-ласка підтвердіть свій аккаунт
                        за допомогою <b>електронної пошти.</b> 
                        </div>
                     </div>
                    }
                </div>
            </WhiteBlock>
        </section>
        )
    }
}

export default RegisterForm;