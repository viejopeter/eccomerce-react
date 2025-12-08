import { useEffect, useState } from 'react'

import axios from 'axios'
import './OrdersPage.css'
import Header from '../../components/Header'
import OrdersGrid from './OrdersGrid'

const OrdersPage = ({ cart }) => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get('/api/orders?expand=products')
            .then((response) => {
                setOrders(response.data)
            });
    }, [])

    return (
        <>
            <title>Orders</title>
            <link rel="icon" type="image/svg+xml" href="/images/orders-favicon.png" />

            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>
                 
                 <OrdersGrid orders={orders} />
            </div>
        </>
    )
}

export default OrdersPage