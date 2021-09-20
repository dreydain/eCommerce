import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Product from '../components/Product'
import {Row, Col} from 'react-bootstrap'

const HomeScreen = () => {
    const [products, setProducts] = useState([])

    //Using a function to make axios request but not using .then and .catch syntax
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products')

            setProducts(data)
        }

        fetchProducts()
    }, [])

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product => 
                    <Col key={product._id} sm={12} md={6} lg={4}
                    xl={3}>
                        <Product product={product} fluid/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
