import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlock,
    TotalContainer,
    TestWarning
} from './checkout.styles';

const checkoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <TotalContainer>TOTAL: ${total}</TotalContainer>
        <TestWarning>
        Please use the following test credit card for payment<br/>
            4242 4242 4242 4242 - Exp: 01/20 CVC: 123<br/>
        </TestWarning>
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(checkoutPage);