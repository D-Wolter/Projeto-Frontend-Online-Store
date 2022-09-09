import React from 'react';
import { Redirect } from 'react-router-dom';
import { getCategories } from '../services/api';

class Home extends React.Component {
  state = {
    productName: '',
    messageOn: false,
    lista: [],
  };

  componentDidMount() {
    this.requestApi();
  }

  requestApi = async () => {
    const retorno = await getCategories();
    this.setState({
      lista: retorno,
    });
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
    const { productName, messageOn, lista } = this.state;
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

        {lista.map((e) => (
          <label htmlFor="radio" key={ e.id } data-testid="category">
            { e.name }
            <input type="radio" id="radio" key={ e.id } />
          </label>))}
      </div>

    );
  }
}

export default Home;
