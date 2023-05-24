import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';

import { Card, Form } from 'react-bootstrap';
let isBrandSelected = false;
const BrandBar = observer(() => {
    const {device} = useContext (Context)
    return (
        <Form className='d-flex justify-content-evenly'> 
            {device.brands.map(brand =>
                <Card
                style={{cursor: 'pointer'}}
                key={brand.id}
                className='p-3'
                onClick={() => {
                    if (isBrandSelected == false) {
                    device.setSelectedBrand(brand)
                    isBrandSelected = true;
                    }
                    else 
                    {
                        device.setSelectedBrand(null)
                        isBrandSelected = false
                    }
                    
                }}
                border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
                >
                    {brand.name}
                </Card>    
            )}

        </Form>
    );
});

export default BrandBar;