import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateType from '../components/Modals/CreateType';
import CreateBrand from '../components/Modals/CreateBrand';
import CreateDevice from '../components/Modals/CreateDevice';

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return (
        <Container style={{backgroundColor: '#212529', borderRadius: '25px'}} className='d-flex flex-column mt-5'>
            <h1 style={{color: 'white', textDecorationLine: 'none'}} className='d-flex justify-content-center p-2'>Панель администратора</h1>
            <Button 
            variant='outline-light' 
            className='m-4 p-2'
            onClick={() => setTypeVisible(true)}
            
            >Добавить тип</Button>
            <Button 
            variant='outline-light' 
            className='m-4 p-2'
            onClick={() => setBrandVisible(true)}
            
            >Добавить бренд</Button>
            <Button 
            variant='outline-light' 
            className='m-4 p-2'
            onClick={() => setDeviceVisible(true)}
            
            >Добавить устройство</Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    );
};

export default Admin;