import React from 'react'
import CheckoutSteps from "../components/Checkout/CheckoutSteps";
import Checkout from "../components/Checkout/Checkout";
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';

const CheckoutPage = () => {
    return (
        <div>
                <Header />
                <br />
                <br />
                <CheckoutSteps active={1} />
                <Checkout />
                <br />
                <br />
                <Footer />
        </div>
    )
}

export default CheckoutPage;