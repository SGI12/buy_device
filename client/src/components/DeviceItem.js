import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/const';




const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        
        <Col md={3} className='mt-4' onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}> 
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image width={200} height={200} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className='text-black-50 mt-1 d-flex justify-content-between'>
                    <div className='d-flex align-items-center'>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;