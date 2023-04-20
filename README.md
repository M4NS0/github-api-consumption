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
Foi escolhido o bootstrap para integrar o projeto
Devido ao tempo curto e a facilidade para impelemntação, mantém o código limpo sem excesso de classes css/scss
Também ajuda a definir espaçamentos padronizados e outras padronizações, como padrão de código auxiliando o clean-code
Outra vantagem é na construção de grids para organização do layout

## Estrutura
A estrutura de pastas segue a convensão dos pardrões de desenvolvimento em angular.
Foi utilizada uma estrutura aninhada, para deixar claro quem são os 'pais' e 'filhos' na aplicação, 
auxiliando também no clean-code e entendimento do projeto.
A estrutura foi componentizada, evitando grandes 'monólitos' e sendo assim fácil de se manter, atualizar ou implementar novas features.
A componentização necessita dos devidos data-bindings para comunicação entre componentes. Isso ajuda na agilidade e dinamicidade da aplicação.

