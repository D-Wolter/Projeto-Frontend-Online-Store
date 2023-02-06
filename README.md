# :convenience_store: FrontEnd Online Store! :convenience_store:

<p align="center"><strong>👨‍💻 Projeto em grupo do módulo de Front-end do curso de Desenvolvimento Web da Trybe, desenvolvido por Daniel Wolter, Carlos Prado, Alvim JP, José Filipe Vieira Furieri. </p><br />

Este foi o nosso primeiro trabalho em grupo do módulo de front-end! Foi um trabalho em que colocamos as metodologias ágeis em prática, utilizando a ferramenta Trello para organizar os requisitos. 
Nos organizamos em pair programming e fizemos o trabalho inteiro em duplas ou em trios. Abrimos uma branch por requisito em seguida abríamos um pull request e aguardávamos code review de outros membros para aprovar e dar um merge na nossa branch principal. 

### Mas do que se trata a front-end online store? 
Precisamos desenvolver uma loja online alimentada pela API do mercado livre. Onde seria possível para o cliente filtrar os produtos por categoria, pesquisar na barra de pesquisa, adicionar, remover e alterar a quantidade do produto no carrinho e em seguida finalizar a compra em uma página de checkout.


### Endpoints da API
<li>Para listar as categorias disponíveis: https://api.mercadolibre.com/sites/MLB/categories </li>
<li>Para buscar itens por termo: https://api.mercadolibre.com/sites/MLB/search?q=${valor-da-busca} </li>
<li>Para buscar itens por categoria: https://api.mercadolibre.com/sites/MLB/search?category=${id-da-categoria} </li>
<li>Para buscar itens de uma categoria por termo: https://api.mercadolibre.com/sites/MLB/search?category=${id-da-categoria}&q=${valor-da-busca}</li>
<li>Para buscar detalhes de um item específico: https://api.mercadolibre.com/items/${id-do-produto}

## Tecnologias usadas
Front-end:
> Desenvolvido usando: React, CSS3, HTML5, ES6
  
## Instalando Dependências
> Frontend
```bash
cd src/
npm install
``` 
## Executando aplicação
* Para rodar o front-end:

  ```
    cd src/ && npm start
  ```

## Executando Testes

* Para rodar todos os testes:

  ```
    npm test
  ```

