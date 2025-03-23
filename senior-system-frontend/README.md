# Bem-vindo ao Sistema Senior

Este projeto é uma aplicação web desenvolvida para integrar com o sistema Senior, focando nos módulos de Folha de Pagamento, Ponto Eletrônico e Recrutamento e Seleção. Ele fornece uma solução de frontend robusta para gerenciar operações de folha de pagamento, rastreamento de frequência e processos de recrutamento.

## Começando com Create React App

Este projeto foi inicializado com Create React App.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.

Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no seu navegador.

A página será recarregada quando você fizer alterações.

Você também pode ver quaisquer erros de lint no console.

### `npm test`

Inicia o executor de testes no modo de observação interativo.

Veja a seção sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`

Constrói o aplicativo para produção na pasta `build`.

Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

A compilação é minificada e os nomes de arquivo incluem os hashes.

Seu aplicativo está pronto para ser implantado!

Veja a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

### `npm run eject`

**Nota: esta é uma operação de sentido único. Depois de executar `eject`, você não pode voltar!**

Se você não estiver satisfeito com a ferramenta de compilação e as opções de configuração, você pode executar `eject` a qualquer momento. Este comando removerá a dependência de compilação única do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc.) diretamente para o seu projeto, para que você tenha controle total sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas eles apontarão para os scripts copiados para que você possa ajustá-los. Neste ponto, você está por sua conta.

Você nunca precisa usar `eject`. O conjunto de recursos selecionados é adequado para implantações pequenas e médias, e você não deve se sentir obrigado a usar este recurso. No entanto, entendemos que esta ferramenta não seria útil se você não pudesse personalizá-la quando estiver pronto para isso.

## Testes de Requisições com Postman

Para testar as requisições da API, você pode importar a coleção do Postman incluída no projeto.

1. Abra o Postman.
2. Clique em "Import" no canto superior esquerdo.
3. Selecione o arquivo `SeniorSystemAPI.postman_collection.json` localizado no diretório raiz do projeto.
4. Clique em "Import".

Agora você pode executar as requisições da coleção "Senior System API" no Postman.

## Saiba Mais

Você pode aprender mais na [documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, consulte a [documentação do React](https://reactjs.org/).

### Divisão de Código (Code Splitting)

Esta seção foi movida para cá: https://facebook.github.io/create-react-app/docs/code-splitting

### Analisando o Tamanho do Pacote (Bundle Size)

Esta seção foi movida para cá: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Criando um Aplicativo Web Progressivo (Progressive Web App)

Esta seção foi movida para cá: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Configuração Avançada

Esta seção foi movida para cá: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Implantação (Deployment)

Esta seção foi movida para cá: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` falha ao minificar

Esta seção foi movida para cá: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

senior-system-api
├── senior-system-frontend
│   ├── public
│   │   ├── index.html
│   │   └── ...
│   ├── src
│   │   ├── components
│   │   │   ├── PayrollList.js
│   │   │   └── PayrollList.css
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── README.md
│   └── SeniorSystemAPI.postman_collection.json
└── package.json