# front-coding-test
Instruções do teste para front-end da FARM

## O que é esperado?
Uma aplicação simples para exibição em tela (a partir de um layout) de uma lista de países com o sumário de casos de COVID-19, usando como fonte de dados uma [API pública](https://documenter.getpostman.com/view/10808728/SzS8rjbc)

## Tarefas

### Construir o layout
* Crie e estruture do frontend estático (html e css) a partir do [layout]('./assets/layout.png')
* Na pasta *assets/* estão os assets que podem ser usados na construção do layout.
* Pode usar a fonte [Spectral do Google Fonts](https://fonts.google.com/specimen/Spectral)

<img src="./assets/layout/layout.jpg" alt="Layout" style="width:480px;"/>

### Conectar com a API
Conecte a sua aplicação com a [API com o sumário de casos de COVID](https://api.covid19api.com/summary); a listagem de países está dentro do objeto *Countries*, em forma de array. A lista de países que estava estática deve ser listada dinamicamente, assim como os dados de totais de casos e de fatalidades.

## Pré-requisitos
* deve ser possível rodar o projeto localmente usando npm ou yarn
* código deve estar hospedado em um repositório no Github ou outra plataforma de versionamento de código com acesso público (obs.: não faça fork desse projeto, crie um novo e nos envie a url)

## Diferenciais
* app hospedada em alguma url pública, pronta para navegar (exemplo: Github Pages, Heroku, Netlify)
* algum nivel de cobertura de testes, seja ele unitário ou de integração
* versão responsiva

## Use sua criatividade
Gostaríamos de ver a inserção de alguma funcionalidade extra no app, como por exemplo:
- poder ordenar alfabeticamente ou por quantidade total de casos
- ter um campo de filtro (campo texto aberto) por nome do país
- exibir os totais dos últimos 5 dias de um país, ao clicar no nome dele; para isso, pode consumir a [API por país](https://api.covid19api.com/country/brazil/status/confirmed) , onde o *brazil* é o atributo slug de cada item do sumário

## Dicas
* o histórico de commits mostra como seu código é organizado e como é sua linha de pensamento
* ter um README bem escrito
* na FARM nossa stack de frontend é majoritariamente em Vue.JS mas não é necessário que o teste use esse framework; você tanto pode usar algum framework  (React, Angular, Vue, Svelte, etc...) quanto criar uma aplicação em com html + css + javascript puros. Fica à sua escolha
* fica a seu critério usar um framework de UI (como implementações do Bootstrap ou Material Design) para a estruturação dos componentes de interface ou criá-los do zero

### Links
* Documentação da [API Covid 19](https://documenter.getpostman.com/view/10808728/SzS8rjbc)
* [Site API Covid 19](https://covid19api.com/)
* Nosso [LinkedIn](https://www.linkedin.com/company/farminvestimentos/) 
* E-mail para envio do link com seu repositório: [developers@farminvestimentos.com.br](developers@farminvestimentos.com.br)
