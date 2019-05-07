## Hapz - Teste Bemobi

Landing page desenvolvida para teste de conhecimento no processo seletivo da equipe Bemobi.

## Tecnologias e metodologias utilizadas
  * React.JS
  * Webpack (create-react-app)
  * Mobile First
  * Atomic Design
  * Styled-Components (SASS in JS)
  * Storybook
  
## Passo a passo para execução do projeto

Essas instruções farão com que você tenha uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste.

## Pré-Requisitos
  ``` 
  - Node >= 6
  - NPM >= 5.2
 ```
    
## Instalação
  **1 - Clonar o projeto**
  ```
  git clone https://github.com/joaogj/test-bemobi.git
  ```
  
  **2 - Entrar na raiz do projeto e instalar dependências**
 ```
 - cd test-bemobi
 - npm install
 ```
  
  **3 - Rodar em modo de desenvolvimento**
  ```
  npm start
  ```
  
  OBS: ao rodar o comando npm start, será aberta automaticamente uma página no seu navegador, apontando para http://localhost:3000, caso isso não aconteça, basta acessar a url manualmente. A página irá recarregar automaticamente caso haja alguma edição.
    
  **4 - Build da aplicação para produção**
  ```
  npm run build
  ```
  
  OBS: Cria o aplicativo para produção na pasta `build`.
Ele agrupa corretamente o React no modo de produção e otimiza o build para obter o melhor desempenho.
A compilação é reduzida e os nomes dos arquivos incluem os hashes. <br>

 **5 - Rodar storybook**
  ```
  npm run storybook
  ```
  
  OBS: ao rodar o comando npm run storybook, será aberta automaticamente uma página no seu navegador, apontando para http://localhost:9009 com o catálogo de componentes divididos, seguindo o método do Atomic Design. Caso isso não aconteça, basta acessar a url manualmente. A página irá recarregar automaticamente caso haja alguma edição.

