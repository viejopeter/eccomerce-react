import './HomePage.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../../components/Header.jsx'
import ProductsGrid  from './ProductsGrid'

const HomePage = ({ cart }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        const fetchProducts = async () => {

            try {
                const response = await axios.get("/api/products")
                setProducts(response.data)
            } catch (e) {
                console.error("Error fetching products:", e)
            }
        }
        fetchProducts()
    }, [])


    return (
        <>
            <title>Eccomerce Project</title>
            <link rel="icon" type="image/svg+xml" href="/images/home-favicon.png" />
            <Header cart={cart} />
            <div className="home-page">
                <ProductsGrid products={products}/>
            </div>
        </>
    );
}

export default HomePage;