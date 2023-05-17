import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Form, Card, Button } from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, TEXT_COLOR } from '../utils/const';
import { NavLink, useLocation  } from 'react-router-dom';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)
    return (
        <Container 
            bg='dark'
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}
        >
        <Card style={{width: '50%'}} className='p-5 pt-3' bg='dark'>
            <h2 className='m-auto' style={{color: TEXT_COLOR}}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            <Form className='d-flex flex-column'>
                <Form.Control
                    className='mt-3'
                    placeholder='Введите ваш e-mail...'
                />
                <Form.Control
                    className='mt-3'
                    placeholder='Введите ваш пароль...'
                />
                <div className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                {isLogin ? 

                <div style={{color: TEXT_COLOR}}>
                    Нет аккаунта? <NavLink style={{color: TEXT_COLOR}} to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                </div>
                :
                <div style={{color: TEXT_COLOR}}>
                    Есть аккаунт? <NavLink style={{color: TEXT_COLOR}} to={LOGIN_ROUTE}>Войдите!</NavLink>
                </div>
                    }
                <Button variant={'outline-success'} style={{width: '25%', color: TEXT_COLOR}}>
                    {isLogin ? 'Войти' : 'Регистрация'}
                </Button>
                </div>

            </Form>
        </Card> 
        </Container>
    );
};

export default Auth;