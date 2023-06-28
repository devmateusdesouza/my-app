# my-app


Estava dando tela branca ao fazer o deploy, depois deu tela preta, a solução estava nas configurações do BrowserRouter.
Solução abaixo:

Você precisa adicionar seu caminho raiz ao prop basename do BrowserRouter

Se você não estiver usando o BrowserRouter, adicione o seguinte

import BrowserRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render((
   <BrowserRouter basename={process.env.PUBLIC_URL}>
     <App />
   </BrowserRouter>
), ...)  
process.env.PUBLIC_URL faz parte da biblioteca node.js e é um URL gerado dinamicamente que muda com base no modo de desenvolvimento em que você está, esteja trabalhando em seu aplicativo localmente ou em um servidor de produção real, como páginas do GitHub ( https://parthaaaaa.github.io/firstwebapp/ ).

Atualize também a rota para seu componente home/firstwebapp (se houver)

 <Route exact path='/firstwebapp' render= ... />} />
para

 <Route exact path='/' render= ... />} />
Com essa alteração, quando o caminho da rota corresponder a 'process.env.PUBLIC_URL' (reponame + '/'), ele renderizará seu primeiro componente webapp
