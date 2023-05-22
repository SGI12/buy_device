import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Admin = () => {
    return (
        <Container style={{backgroundColor: '#212529', borderRadius: '25px'}} className='d-flex flex-column mt-5'>
            <h1 style={{color: 'white', textDecorationLine: 'none'}} className='d-flex justify-content-center p-2'>Панель администратора</h1>
            <Button variant='outline-light' className='m-4 p-2'>Добавить тип</Button>
            <Button variant='outline-light' className='m-4 p-2'>Добавить бренд</Button>
            <Button variant='outline-light' className='m-4 p-2'>Добавить устройство</Button>
        </Container>
    );
};

export default Admin;