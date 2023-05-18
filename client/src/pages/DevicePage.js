import React, { useState } from 'react';
import { Button, ButtonGroup, Col, Container, Form, Image, Row, ToggleButton } from 'react-bootstrap';

const DevicePage = () => {
    const device = {id: 1, name: 'Apple iPhone 12 PRO eSIM 128GB Фиолетовый', price: 97900, rating: 5, img: 'https://images.biggeek.ru/1/435/4b14/12465-456bigeek_image2.jpeg'}
    const variant_radios = [
        { name: 'Новый', value: '1' },
        { name: 'Восстановленный', value: '2' },
      ];
    const delivery_radios = [
        { name: 'Самовывоз', value: '1' },
        { name: 'Курьером', value: '2' },
      ];
    const payment_radios = [
        { name: 'Онлайн', value: '3' },
        { name: 'При получении', value: '4' },
      ];


    const [variantRadioValue, setVariantRadioValue] = useState('0');
    const [deliveryRadioValue, setDeliveryRadioValue] = useState('1');
    const [paymentRadioValue, setPaymentRadioValue] = useState('2');
    

    return (
        
        <Container className='mt-3'>
         <Row>
            <Col md={6}>
                <Image width={500} height={500} src={device.img}/>
            </Col>

            <Col md={6}>
                <Form className="d-flex flex-column align-items-center">
                    <h1 className='mt-3 mb-5' style={{fontSize: 22, lineHeight: '30px',}}>{device.name}</h1>
                    <div className='d-flex flex-column'> 
                        <div style={{width: '28em'}} className='d-flex mb-3'>
                            <div style={{height: '40px', textAlign: 'center', fontSize: '16px', display: 'table'}} className='me-5 d-flex align-items-center'>
                                Вариант
                            </div>
                            <div className='d-flex justify-content-around'>
                            {variant_radios.map((radio, idx) => (
                            <ToggleButton
                                className='ms-5'
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={'outline-success'}
                                name="variantRadio"
                                value={radio.value}
                                checked={variantRadioValue === radio.value}
                                onChange={(e) => setVariantRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                                ))}
                            </div>
                            
                        </div>

                        <div style={{width: '29em'}}className='d-flex mb-3'>
                            <div style={{height: '40px', textAlign: 'center', fontSize: '16px', display: 'table'}} className='me-5 d-flex align-items-center'>
                                Доставка
                            </div>
                            <div className='d-flex justify-content-around'>
                            {delivery_radios.map((radio, idx) => (
                            <ToggleButton
                                className='ms-5'
                                key={idx}
                                id={`radio1-${idx}`}
                                type="radio"
                                variant={'outline-success'}
                                name="deliveryRadio"
                                value={radio.value}
                                checked={deliveryRadioValue === radio.value}
                                onChange={(e) => setDeliveryRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                                ))}
                            </div>
                        </div>

                        <div style={{width: '29em'}}className='d-flex '>
                            <div style={{height: '40px', verticalAlign: 'center', fontSize: '16px'}} className='me-5 d-flex align-items-center'>
                                Оплата
                            </div>
                            <div className='d-flex justify-content-around'>
                            {payment_radios.map((radio, idx) => (
                            <ToggleButton
                                className='ms-5'
                                key={idx}
                                id={`radio2-${idx}`}
                                type="radio"
                                variant={'outline-success'}
                                name="paymentRadio"
                                value={radio.value}
                                checked={paymentRadioValue === radio.value}
                                onChange={(e) => setPaymentRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                                ))}
                            </div>
                        </div>
                    </div>
                </Form>
            </Col>
        </Row>
        </Container>
    );
};

export default DevicePage;