import React from 'react';
import { Redirect } from 'react-router-dom';
import { getCategories, getProductByName } from '../services/api';

class Home extends React.Component {
  state = {
    productName: '',
    messageOn: false,
    lista: [],
    products: [],

  };

  componentDidMount() {
    this.requestApi();
    this.teste();
  }

  requestApi = async () => {
    const retorno = await getCategories();
    this.setState({
      lista: retorno,
    });
  };

  teste = async () => {
    const result = await getProductByName('carro');
    console.log(result);
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  requireProducts = async () => {
    const { productName } = this.state;
    const dataApi = await getProductByName(productName);
    this.setState({ products: dataApi });
    console.log(dataApi);
  };

  handleClick = () => {
    this.setState({
      messageOn: true,
    });
  };

  render() {
    const { productName, messageOn, lista, products: { results } } = this.state;
    return (
      <div>
        <input
          type="text"
          name="productName"
          value={ productName }
          onChange={ this.handleChange }
          data-testid="query-input"
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.requireProducts }
        >
          Pesquisar
        </button>
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
        { results !== undefined ? results.map(({ id, title, thumbnail, price }) => (
          <div key={ id } data-testid="product">
            {title}
            <img src={ thumbnail } alt={ title } />
            {price}
          </div>
        )) : <p>Nenhum produto foi encontrado</p>}

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
