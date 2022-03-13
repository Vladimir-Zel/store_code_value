import React, {useState} from 'react';
import {v4 as uuid4} from 'uuid';
import {Col, FormControl, Row} from "react-bootstrap";

const AddProduct = ({product, setProduct}) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('')

    let saveProduct = () => {
        if (name) {
            setProduct(
                [...product, {
                    id: uuid4(),
                    name,
                    price,
                    description,
                    date: new Date().toLocaleDateString()
                }]
            )
            setName('')
            setDescription('')
            setPrice('')
        }
    }

    return (
        <Row className='mt-4'>
            <Col>
                <h3> Add Product</h3>

                <FormControl placeholder='enter name' value={name} onChange={(e) => setName(e.target.value)}/>
                <FormControl placeholder='enter description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                <FormControl placeholder='enter price' value={price} onChange={(e) => setPrice(e.target.value)}/>

                <button type="button" className="btn btn-secondary" onClick={saveProduct}>Add product</button>
            </Col>
        </Row>
    );

};

export default AddProduct;