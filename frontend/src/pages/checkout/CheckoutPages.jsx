import CheckoutHeader from './CheckoutHeader';
import './CheckoutPage.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import OrderSummary from './OrderSummary';
import PaymentSummary from './PaymentSummary';

const CheckoutPages = ({ cart }) => {

    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState([]);

    useEffect(() => {

        const fetchDeliveryData = async () => {

            try {

                const response = await axios.get("/api/delivery-options?expand=estimatedDeliveryTime")
                setDeliveryOptions(response.data)

            } catch (e) {
                console.error("Error fetching the delivery options data", e)
            }
        }
        fetchDeliveryData()
    }, [])


    useEffect(() => {

        const fetchPaymentsData = async () => {

            try {
                const response = await axios.get("/api/payment-summary")
                setPaymentSummary(response.data)
            } catch (e) {
                console.error("Error fetching paytments data")
            }
        }
        fetchPaymentsData()

    }, [])

    return (
        <>
            <title>Checkout</title>
            <link rel="icon" type="image/svg+xml" href="/images/cart-favicon.png" />
            <CheckoutHeader cart={cart}/> 
            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />
                    <PaymentSummary paymentSummary={paymentSummary} />
                </div>
            </div>
        </>
    )
}

export default CheckoutPages