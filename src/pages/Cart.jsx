import React, { Component } from 'react';
import { getCartItem } from '../services/cartApi';

export default class Cart extends Component {
  state = {
    cartItens: [],
  };

  componentDidMount() {
    const retorno = getCartItem();
    this.setState({
      cartItens: retorno,
    });
  }

  render() {
    const { cartItens } = this.state;
    return (
      <div>
        {cartItens.length > 0 ? (cartItens.map(({ product, price, id }) => (
          <div key={ id }>
            <p data-testid="shopping-cart-product-name">{ product }</p>
            <p>{ price }</p>
            <p data-testid="shopping-cart-product-quantity">Quantidade: 1</p>
          </div>)))
          : (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio

            </p>)}
      </div>
    );
  }
}
