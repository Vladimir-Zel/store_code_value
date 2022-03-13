import React, {useRef, useState} from 'react';
import styles from './productDetail.module.css'
import {Col, Row} from "react-bootstrap";


const ProductDetails = ({product, setProduct}) => {


    const inputRef = useRef(null);
    const onSearchClick = () => {
        const searchProducts = product.filter(product => product.name.toLowerCase().includes(inputRef.current.value))
        setProduct(searchProducts);
    }

    return (
        <Row className='mt-4'>
            <Col>
                <h3>Product details</h3>
                <div>
                    <input ref={inputRef} type='text'/>
                    <button type='button' onClick={onSearchClick}>Search</button>
                </div>
                {product.map(item => (
                    <div key={item.id} className={styles.listItems}>
                        <ul>
                            <li>
                                name: {item.name}
                            </li>
                            description: {item.description}
                            <br/>
                            price: {item.price}
                            <br/>
                            date: {item.date}
                        </ul>
                    </div>
                ))}
            </Col>
        </Row>
    );
};

export default ProductDetails;


// import React, {useRef, useState} from 'react';
// import styles from './productDetail.module.css'
// import {Col, Row} from "react-bootstrap";
//
//
// const ProductDetails = ({product, setProduct}) => {
//
//
//     const inputRef = useRef(null);
//     const onSearchClick = () => {
//         const searchProducts = product.filter(product => product.name.toLowerCase().includes(inputRef.current.value))
//        setProduct(searchProducts);
//     }
//
//     return (
//         <Row className='mt-4'>
//             <Col>
//                 <h3>Product details</h3>
//                 <div>
//                     <input ref={inputRef} type='text'/>
//                     <button type='button' onClick={onSearchClick}>Search</button>
//                 </div>
//                 {product.map(item => (
//                     <div key={item.id} className={styles.listItems}>
//                         <ul>
//                             <li>
//                                 name: {item.name}
//                             </li>
//                             description: {item.description}
//                             <br/>
//                             price: {item.price}
//                             <br/>
//                             date: {item.date}
//                         </ul>
//                     </div>
//                 ))}
//             </Col>
//         </Row>
//     );
// };
//
// export default ProductDetails;