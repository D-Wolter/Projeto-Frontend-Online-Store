import React from 'react';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
  state = {
    productName: '',
    messageOn: false,
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    this.setState({
      messageOn: true,
    });
  };

  render() {
    const { productName, messageOn } = this.state;
    return (
      <div>
        <input
          type="text"
          name="productName"
          value={ productName }
          onChange={ this.handleChange }
        />
        {
          productName.length === 0
          && (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>)
        }
        <button
          data-testid="shopping-cart-button"
          type="button"
          onClick={ this.handleClick }
        >
          Carrinho de compras

        </button>
        {
          messageOn && <Redirect to="/Cart" />
        }
      </div>

    );
  }
}

export default Home;
