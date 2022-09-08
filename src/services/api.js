export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const result = await fetch(url).then((response) => response.json());
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=$QUERY';
  const response = await fetch(url);
  const result = await response.json();
  console.log(getProductsFromCategoryAndQuery(categoryId, query));
  return result;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
