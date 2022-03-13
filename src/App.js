import './App.css';
import Header from "./components/header/Header";
import AddProduct from "./components/addProduct/AddProduct";
import ProductDetails from "./components/productDetails/ProductDetails";
import React, {useState} from "react";
import {Container} from "react-bootstrap";

function App() {

    const [product, setProduct] = useState([
        {
            id: 1,
            name: "carrot",
            description: "very tasty carrot",
            price: 1,
            date: new Date('12.31.2021').toLocaleDateString()
        },
        {
            id: 2,
            name: "magazine",
            description: "the most popular magazine",
            price: 2,
            date: new Date('11.15.2021').toLocaleDateString()
        }
    ]);

    // const [product, setProduct] = useState([
    //     initiationProducts.map(item => (
    //         <div key={item.id}>
    //             <ul>
    //                 <li>
    //                     name: {item.name}
    //                 </li>
    //                 description: {item.description}
    //                 <br/>
    //                 price: {item.price}
    //                 <br/>
    //                 date: {item.date}
    //             </ul>
    //         </div>
    //     ))
    // ])

    return (
        <Container>
            <Header/>
            <AddProduct product={product} setProduct={setProduct}/>
            <ProductDetails product={product} setProduct={setProduct}/>
        </Container>
    );
}

export default App;
