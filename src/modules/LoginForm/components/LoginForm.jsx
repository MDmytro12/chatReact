import React from 'react';
import { WhiteBlock } from 'components';
import { Form, Input, Button as ButtonNew} from 'antd';

import {Link} from 'react-router-dom';

import '../../../page/Auth/Auth.css';

const LoginForm = (props) => {

    const {   
    touched,
     errors,
     handleChange,
     handleBlur,
     handleSubmit,
      } = props;  

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

                onSubmit = {handleSubmit}
                >
                    <Form.Item
                        name="name" 
                        validateStatus='error'
                        style={{backgroundColor:'red'}}
                    >
                
                    <Input  
                     placeholder="Логін"
                     name='name'   
                     onChange = {handleChange}
                     onBlur = {handleBlur}
                      />          
                    </Form.Item>
                    

                    <Form.Item
                        name="password"
                    >
                        <Input.Password placeholder="Пароль" type='submit' name='password' onChange={handleChange} onBlur={handleBlur}/>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <ButtonNew size="large" onClick={handleSubmit} >
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

export default LoginForm;