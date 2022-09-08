import React from 'react';

class Home extends React.Component {
  state = {
    productName: '',
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { productName } = this.state;
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
      </div>

    );
  }
}

export default Home;
