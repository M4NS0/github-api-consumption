# GithubApiConsumption

## Instalação do Angular
```sh
npm install -g @angular/cli
```

## Node installation
https://nodejs.org/

## Bootstrap installation
```sh
npm install bootstrap
```

adicionar em angular.json:
```sh
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```
## Instalação do projeto
```sh
npm i
```

## Rodando projeto em modo dev
```sh
ng s --o
```

## Build
```sh
ng build
```

## Escolha de libs
Foi escolhido o bootstrap para integrar o projeto, devido ao tempo curto e a facilidade para impelemntação, mantém o código limpo sem excesso de classes css/scss. Também ajuda a definir espaçamentos padronizados e outros tipos de padronizações,mantendo um padrão de layout. 

Outras vantagens são: a construção de grids para organização do layout e também a redução de códigos em scss, suas classes seriam alteradas apenas quando extritameente necessário.

## Estrutura
A estrutura de pastas segue a convenção dos pardrões de desenvolvimento em Angular. Foi utilizada uma estrutura aninhada, para deixar claro quem são os 'pais' e 'filhos' na aplicação, isso auxilia também no desenvolvimento clean-code, ajuda em code-reviews, no entendimento do projeto e manutenção do código.

A estrutura foi componentizada, evitando grandes monólitos, garantindo maior mantenabilidade agilizando atualizações ou implementações de novas features.
A componentização necessita dos devidos data-bindings para comunicação entre componentes. Isso ajuda na agilidade e dinamicidade da aplicação.
Também devido à compomentização, foi possível usar o mesmo componente de busca, tanto na landing page, quanto na navbar.
